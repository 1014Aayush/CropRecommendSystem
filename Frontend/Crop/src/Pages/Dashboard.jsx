/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./CSSFiles/Dashboard.css";
import Chart from "react-apexcharts";

export default function Dashboard({ title, data }) {
  const [state, setState] = useState({
    temperature: {
      options: {
        chart: {
          id: "temperature-chart",
        },
        xaxis: {
          categories: data ? data.map((d) => d.title) : [],
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
          },
        },
        markers: {
      size: 6, // Size of the marker dots
    },
      },
      series: [
        {
          name: "Temperature",
          data: data ? data.map((d) => d.temp) : [],
        },
      ],
    },
    humidity: {
      options: {
        chart: {
          id: "humidity-chart",
        },
        xaxis: {
          categories: data ? data.map((d) => d.title) : [],
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
          },
        },
        markers: {
      size: 6, // Size of the marker dots
    },
      },
      series: [
        {
          name: "Humidity",
          data: data ? data.map((d) => d.humidity) : [],
        },
      ],
    },
  });

  useEffect(() => {
    if (data) {
      setState((prevState) => ({
        temperature: {
          options: {
            ...prevState.temperature.options,
            xaxis: {
              categories: data.map((d) => d.title),
            },
          },
          series: [
            {
              name: "Temperature",
              data: data.map((d) => d.temp),
            },
          ],
        },
        humidity: {
          options: {
            ...prevState.humidity.options,
            xaxis: {
              categories: data.map((d) => d.title),
            },
          },
          series: [
            {
              name: "Humidity",
              data: data.map((d) => d.humidity),
            },
          ],
        },
      }));
    }
  }, [data]);

  return (
    <div>
      <h1>{title}</h1>
      <Chart
        options={state.temperature.options}
        series={state.temperature.series}
        type="line"
        width="1000"
      />
      <Chart
        options={state.humidity.options}
        series={state.humidity.series}
        type="line"
        width="1000"
      />
    </div>
  );
}
