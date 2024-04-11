import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, registerables } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { listExcelPoints } from "../../action/randomgraphAction";

Chart.register(...registerables);

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const ExcelRandomPointsList = () => {
  const dispatch = useDispatch();
  const excelpointsData = useSelector((state) => state.listExcel);
  const { loading, error, success, excelpoints } = excelpointsData;
  console.log("excel data");
  console.log(excelpoints);

  const [pointsData, setPointsData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const sendpointData = {
    side: 100,
    selection: 5,
    choice: 0,
    value: 10,
  };

  useEffect(() => {
    dispatch(listExcelPoints(sendpointData));
  }, [dispatch]);

  useEffect(() => {
    setPointsData(
      excelpoints?.response?.listOfPoints?.map(([x, y]) => ({ x, y }))
    );
  }, [excelpoints]);

  const chartData = {
    datasets: [
      {
        label: "Excel Random Points List of Points",
        data: pointsData,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError}</div>; // Updated to use 'fetchError'

  return (
    <ChartWrapper>
      <Scatter data={chartData} options={chartOptions} />
    </ChartWrapper>
  );
};

export default ExcelRandomPointsList;
