import axios from "axios";
import { NEWSLETTERS_LIST_REQUEST } from "../constants/newsletterConstants";
import {
  RANDOMGRAPH_EXCEL_LIST_FAIL,
  RANDOMGRAPH_EXCEL_LIST_REQUEST,
  RANDOMGRAPH_EXCEL_LIST_SUCCESS,
  RANDOMGRAPH_FIELD_LIST_FAIL,
  RANDOMGRAPH_FIELD_LIST_REQUEST,
  RANDOMGRAPH_FIELD_LIST_SUCCESS,
} from "../constants/randomgraphConstants";
import { GRAPH_URL } from "../env";

export const listFieldPoints = (pointData) => async (dispatch) => {
  dispatch({
    type: RANDOMGRAPH_FIELD_LIST_REQUEST,
  });
  try {
    // const { data } = await axios.post(
    //   `${GRAPH_URL}/fieldrp/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/`,
    //   pointData
    // );
    const data = {
      success: true,
      message: "List of points",
      response: {
        input_data: {
          side: 10,
          selection: 5,
        },
        listOfPoints: [
          [5.0, 4.0],
          [8.0, 3.0],
          [7.0, 6.0],
          [3.0, 6.0],
          [2.0, 10.0],
          [4.0, 8.0],
          [1.0, 10.0],
          [10.0, 5.0],
          [6.0, 3.0],
          [9.0, 6.0],
        ],
        success: true,
      },
    };

    dispatch({
      type: RANDOMGRAPH_FIELD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RANDOMGRAPH_FIELD_LIST_FAIL,
      payload: error,
    });
  }
};

export const listExcelPoints = (pointData) => async (dispatch) => {
  dispatch({
    type: RANDOMGRAPH_EXCEL_LIST_REQUEST,
  });
  try {
    // const { data } = await axios.post(
    //   `${GRAPH_URL}/excelrp/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/`,
    //   pointData
    // );
    const data = {
      success: true,
      message: "List of points",
      response: {
        input_data: {
          side: 100,
          selection: 5,
          choice: 0,
          value: 10,
        },
        listOfPoints: [
          [0.0, -50.0],
          [-35.194232534519884, -44.11735254827345],
          [-24.14083140222754, -23.723398165965452],
          [-32.69028787975587, -35.69669188355893],
          [-20.996562029282412, -21.14893541503782],
          [31.125856778914695, -32.552347306481224],
          [35.5873732792927, -47.39646244209025],
          [-10.500938130819646, -15.897656339954274],
          [20.76915293991995, -20.98480000252665],
          [-32.94575673860799, -36.295378237410965],
        ],
        success: true,
      },
    };

    dispatch({
      type: RANDOMGRAPH_EXCEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RANDOMGRAPH_EXCEL_LIST_FAIL,
      payload: error,
    });
  }
};
