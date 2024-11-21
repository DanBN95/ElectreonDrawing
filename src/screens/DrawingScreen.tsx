import { Alert, StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import RoundLetterArea from '@src/components/RoundLetterArea';
import Canvas from '@src/components/Canvas';
import { generateRandomLetter, showToast } from '@src/utils';
import { useUploadImageMutation } from '@src/features/queries/ocr-query';

const DrawingScreen = () => {
  const [letter, setLetter] = useState<string>(generateRandomLetter());
  const [uploadImage, { data, isLoading, error }] = useUploadImageMutation();

  const handleOCR = useCallback(
    async (base64: string) => {
      await uploadImage(base64).unwrap();
    },
    [uploadImage],
  );

  useEffect(() => {
    if (data) {
      if (data?.data?.trim() === letter.trim()) {
        showToast('success');
        setLetter(generateRandomLetter());
      } else {
        showToast('error');
      }
    }

    if (error) {
      console.error('OCR Upload Error:', error);
      Alert.alert('Something went wrong', 'Please try again later');
    }
  }, [data, data?.data, error, letter]);
  return (
    <View style={styles.container}>
      <RoundLetterArea {...{ letter, setLetter }} />
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
