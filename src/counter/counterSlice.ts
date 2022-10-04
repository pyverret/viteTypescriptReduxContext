import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    counter: {
        value: number
    }
}

const initialState: CounterState = {
    counter: {value: 0}
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counter.value += 1;
        },
        decrement: state => {
            state.counter.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;