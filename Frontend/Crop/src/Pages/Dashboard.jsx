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
          labels: {
            style: {
              colors: "#ffffff", // Change this to your desired label color
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
          axisTicks: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#ffffff", // Change this to your desired label color
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
          axisTicks: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
        },
        stroke: {
          colors: ["#ffffff"], // Change this to your desired line color
        },
        markers: {
          size: 6, // Size of the marker dots
          colors: ["#ffffff "], // Change this to your desired marker color
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
          labels: {
            style: {
              colors: "#ffffff", // Change this to your desired label color
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
          axisTicks: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#ffffff", // Change this to your desired label color
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
          axisTicks: {
            show: true,
            color: "#ffffff", // Change this to your desired axis color
          },
        },
        stroke: {
          colors: ["#ffffff"], // Change this to your desired line color
        },
        markers: {
          size: 6, // Size of the marker dots
          colors: ["#ffffff"], // Change this to your desired marker color
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
    <div className="Dashboard">
      <center>
        <h1 style={{ color: "white" }}>{title}</h1>
        <br />
        <h2 style={{ color: "white" }}>Temperature</h2>
      </center>
      <div style={{ border: '5px solid white', borderRadius: '20px',backgroundColor: '#477F34' }}>
      <Chart
        align="center"
        options={state.temperature.options}
        series={state.temperature.series}
        type="line"
        width="800"
      /></div>
      <center>
        <h2 style={{ color: "white" }}>Humidity</h2>
      </center>
      <div style={{ border: '5px solid white', borderRadius: '20px',backgroundColor: '#477F34'  }}>
      <Chart
        align="center"
        options={state.humidity.options}
        series={state.humidity.series}
        type="line"
        width="800"
      />
      </div>
    </div>
  );
}
