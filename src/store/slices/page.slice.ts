import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

export interface PageState {
  title: string
}

const initialState: PageState = {
  title: 'Give Consent'
}

const selectSelf = (state: RootState) => state.pageSlice

export const pageTitleSelector = createSelector(selectSelf, (state: PageState) => state.title)

export const pageSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    setPageTitle: (
      state: PageState,
      action: PayloadAction<string>
    ) => {
      state.title = action.payload
    },
  },
});
