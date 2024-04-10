import React, { useEffect, useState } from "react";
import { fetchRandomPoints } from "../../apiService";
import { Scatter } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import { useDispatch, useSelector } from "react-redux";

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const ListFieldRandomPoints = () => {
  const dispatch = useDispatch();
  const fieldpoints = useSelector((state) => state.listField);
  const { loading, error, filedpoints } = fieldpoints;

  const [pointsData, setPointsData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pointData = {
          side: 100,
          selection: 5,
          choice: 0,
          value: 10,
        };
        const {
          success,
          response: responseData,
          error,
        } = await dispatch();
        if (success && responseData.listOfPoints) {
          setPointsData(responseData.listOfPoints.map(([x, y]) => ({ x, y })));
        } else {
          setError(error || "Error fetching random points");
        }
      } catch (error) {
        setError("Error fetching random points");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
  if (error) return <div>Error: {error}</div>;

  return (
    <ChartWrapper>
      <Scatter data={chartData} options={chartOptions} />
    </ChartWrapper>
  );
};

export default ListFieldRandomPoints;
