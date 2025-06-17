import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCounterValue = createAsyncThunk('counter/fetchCounterValue', async () => {
  const response = await new Promise<{ value: number }>((resolve) =>
    setTimeout(() => resolve({ value: 10 }), 1000)
  );
  return response.value;
});

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterValue.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCounterValue.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCounterValue.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
