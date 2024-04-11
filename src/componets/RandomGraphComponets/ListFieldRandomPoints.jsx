import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { listFieldPoints } from "../../action/randomgraphAction";
import { Chart, registerables } from "chart.js";
import { NavLink } from "react-router-dom";

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

  console.log("data fileds points");
  console.log(filedpoints);
  console.log(filedpoints.success);

  const [fetchError, setFetchError] = useState(null);
  const [pointsData, setPointsData] = useState([]);

  const sendpointData = {
    side: 10,
    selection: 5,
  };

  useEffect(() => {
    dispatch(listFieldPoints(sendpointData));
  }, []);

  useEffect(() => {
    setPointsData(
      filedpoints?.response?.listOfPoints?.map(([x, y]) => ({ x, y }))
    );
  }, [filedpoints]);

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
    // <ChartWrapper>
    //   <Scatter data={chartData} options={chartOptions} />
    // </ChartWrapper>

    <div>
      <ChartWrapper>
        <Scatter data={chartData} options={chartOptions} />
      </ChartWrapper>
      <div>
        <NavLink to="/excel">Visual Excel Point Data </NavLink>
      </div>
    </div>
  );
};

export default ListFieldRandomPoints;
