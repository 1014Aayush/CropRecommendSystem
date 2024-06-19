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
              colors: "#ffffff", 
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff",
          },
          axisTicks: {
            show: true,
            color: "#ffffff", 
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#ffffff", 
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", 
          },
          axisTicks: {
            show: true,
            color: "#ffffff", 
          },
        },
        stroke: {
          colors: ["#ffffff"], 
        },
        markers: {
          size: 6, // Size of the marker dots
          colors: ["#ffffff "], 
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
              colors: "#ffffff", 
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", 
          },
          axisTicks: {
            show: true,
            color: "#ffffff", 
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#ffffff", 
            },
          },
          axisBorder: {
            show: true,
            color: "#ffffff", 
          },
          axisTicks: {
            show: true,
            color: "#ffffff", 
          },
        },
        stroke: {
          colors: ["#ffffff"], 
        },
        markers: {
          size: 6, 
          colors: ["#ffffff"], 
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
    <section className="App-header" id="dashboard">
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
    </section>
  );
}
