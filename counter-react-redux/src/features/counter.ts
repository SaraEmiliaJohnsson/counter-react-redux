import { createAction, createReducer } from "@reduxjs/toolkit";


const increaseStitch = createAction('increase stitch counter');
const decreaseStitch = createAction('decrease stitch counter');

const increaseRow = createAction('increase row counter');
const decreaseRow = createAction('decrease row counter');

const actions = { increaseStitch, decreaseStitch, increaseRow, decreaseRow };

const initialState = {
    stitches: 0,
    rows: 0
};

const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(increaseStitch, state => {
            state.stitches += 1;
        })
        .addCase(decreaseStitch, state => {
            state.stitches -= 1;
        })
        .addCase(increaseRow, state => {
            state.rows += 1;
        })
        .addCase(decreaseRow, state => {
            state.rows -= 1;
        });
})

export { actions, counterReducer };