import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listFieldPoints } from "../../action/randomgraphAction";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const ListFieldRandomPoints = () => {
  const dispatch = useDispatch();
  const fieldpointsData = useSelector((state) => state.listField);
  const { loading, error, success, filedpoints } = fieldpointsData;

  console.log("data");
  console.log(filedpoints);
  const [fetchError, setFetchError] = useState(null);
  const [pointsData, setPointsData] = useState([]);

  const sendpointData = {
    side: 100,
    selection: 5,
    choice: 0,
    value: 10,
  };

  useEffect(() => {
    dispatch(listFieldPoints(sendpointData));
  }, [dispatch]);

  useEffect(() => {
    if (success && filedpoints?.response?.listOfPoints) {
      setPointsData(
        filedpoints?.response?.listOfPoints?.map(([x, y]) => ({ x, y }))
      );
    } else {
      setFetchError(error || "Error fetching random points");
    }
  }, [success, filedpoints, error]);

  const chartData = {
    datasets: [
      {
        label: "Field Random Points List of Points",
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
  if (fetchError) return <div>Error: {fetchError}</div>;

  return (
    <ChartWrapper>
      <Scatter data={chartData} options={chartOptions} />
    </ChartWrapper>
  );
};

export default ListFieldRandomPoints;
