import { Alert, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import Canvas from '@src/components/Canvas';
import { generateRandomLetter, showToast } from '@src/utils';
import { useUploadImageMutation } from '@src/features/queries/ocr-query';
import { useDispatch } from 'react-redux';
import { updateDrawingSession } from '@src/features/slices/summaryResultsSlice';
import RandomLetterDisplay from '@src/components/RandomLetterDisplay';

const DrawingScreen = () => {
  const dispatch = useDispatch();
  const [letter, setLetter] = useState<string>(generateRandomLetter());
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const handleOCR = useCallback(
    async (base64: string) => {
      try {
        const data = await uploadImage(base64).unwrap();
        if (data) {
          if (data?.data?.trim() === letter?.trim()) {
            showToast('success');
            updateRecognitionResult('success', data?.id);
            setLetter(generateRandomLetter());
          } else {
            showToast('error');
            updateRecognitionResult('error', data?.id);
          }
        }
      } catch (error) {
        console.error('OCR Upload Error:', error);
        Alert.alert('Something went wrong', 'Please try again later');
      }
    },
    [uploadImage, letter],
  );

  const updateRecognitionResult = (attemptOutcome: 'success' | 'error', sessionId: string) => {
    dispatch(
      updateDrawingSession({
        id: sessionId,
        timestamp: new Date().toISOString(),
        attemptedLetter: letter,
        attemptOutcome,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <RandomLetterDisplay {...{ letter, setLetter }} raffleDisabled={isLoading} />
      <Canvas OCRTrigger={handleOCR} isLoading={isLoading} />
    </View>
  );
};

export default DrawingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
