import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/app/store';
import { formatDate } from '@src/utils';

export type SummarySessionType = {
  id: string;
  timestamp: string; // ISO Date
  attemptedLetter: string;
  attemptOutcome: 'success' | 'error';
};

type SummaryResultsType = {
  results: SummarySessionType[];
  overallAttempts: number;
  successRate: number;
};

const initialState: SummaryResultsType = {
  results: [],
  overallAttempts: 0,
  successRate: 0,
};

const summaryResultsSlice = createSlice({
  name: 'summaryResults',
  initialState,
  reducers: {
    updateDrawingSession: (state, action: PayloadAction<SummarySessionType>) => {
      state.results.unshift(action.payload);
      state.overallAttempts = state.overallAttempts + 1;
      if (action.payload.attemptOutcome === 'success') {
        state.successRate = state.successRate + 1;
      }
    },
  },
});

export const selectSummaryResults = (state: RootState) => state.summaryResults;
export const selectResultsTable = createSelector(selectSummaryResults, (summaryResults) => {
  return summaryResults.results.map((result) => ({
    ...result,
    timestamp: formatDate(result.timestamp),
  }));
});

export const { updateDrawingSession } = summaryResultsSlice.actions;

export default summaryResultsSlice.reducer;
