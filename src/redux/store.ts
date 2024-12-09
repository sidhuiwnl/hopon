"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AutomationReducer from "@/redux/slices/automation"


const rootReducer = combineReducers({
    AutomationReducer
})


export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false,
    })
})