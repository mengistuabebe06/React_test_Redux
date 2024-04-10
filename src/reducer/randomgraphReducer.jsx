import {
  RANDOMGRAPH_EXCEL_LIST_FAIL,
  RANDOMGRAPH_EXCEL_LIST_REQUEST,
  RANDOMGRAPH_EXCEL_LIST_SUCCESS,
  RANDOMGRAPH_FIELD_LIST_FAIL,
  RANDOMGRAPH_FIELD_LIST_REQUEST,
  RANDOMGRAPH_FIELD_LIST_SUCCESS,
} from "../constants/randomgraphConstants";

export const FieldPointsListReducer = (
  state = { loading: true, filedpoints: [] },
  action
) => {
  switch (action.type) {
    case RANDOMGRAPH_FIELD_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RANDOMGRAPH_FIELD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        filedpoints: action.payload,
      };
    case RANDOMGRAPH_FIELD_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const ExcelPointsListReducer = (
  state = { loading: true, excelpoints: [] },
  action
) => {
  switch (action.type) {
    case RANDOMGRAPH_EXCEL_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RANDOMGRAPH_EXCEL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        excelpoints: action.payload,
      };
    case RANDOMGRAPH_EXCEL_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
