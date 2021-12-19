import { combineReducers, createStore } from "redux";
import { formReducer } from "./formReducer";

// Создание rootReducer

const rootReducer = combineReducers({
  formReducer,
});

// Создание store

export const store = createStore(rootReducer);
