import { combineReducers } from "@reduxjs/toolkit";
import {consentApi} from "./apis/consent.api";
import {pageSlice} from "./slices/page.slice";

export default combineReducers({
  [consentApi.reducerPath]: consentApi.reducer,
  [pageSlice.name]: pageSlice.reducer,
});
