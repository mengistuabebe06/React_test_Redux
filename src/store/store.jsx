import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  ExcelPointsListReducer,
  FieldPointsListReducer,
} from "../reducer/randomgraphReducer";

const initialState = {};

const reducer = combineReducers({
  listField: FieldPointsListReducer,
  listExcel: ExcelPointsListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
