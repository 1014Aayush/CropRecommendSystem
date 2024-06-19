/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./CSSFiles/Dashboard.css";
import Chart from "react-apexcharts";

export default function Dashboard({ title, data}) {
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
              colors: "#d9d9d9",
            },
          },
          axisBorder: {
            show: true,
            color: "#d9d9d9",
          },
          axisTicks: {
            show: true,
            color: "#d9d9d9",
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#d9d9d9",
            },
          },
          axisBorder: {
            show: true,
            color: "#d9d9d9",
          },
          axisTicks: {
            show: true,
            color: "#d9d9d9",
          },
        },
        stroke: {
          colors: ["#d9d9d9"],
        },
        markers: {
          size: 6, // Size of the marker dots
          colors: ["#d9d9d9 "],
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
              colors: "#d9d9d9",
            },
          },
          axisBorder: {
            show: true,
            color: "#d9d9d9",
          },
          axisTicks: {
            show: true,
            color: "#d9d9d9",
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => Math.round(value),
            style: {
              colors: "#d9d9d9",
            },
          },
          axisBorder: {
            show: true,
            color: "#d9d9d9",
          },
          axisTicks: {
            show: true,
            color: "#d9d9d9",
          },
        },
        stroke: {
          colors: ["#d9d9d9"],
        },
        markers: {
          size: 6,
          colors: ["#d9d9d9"],
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
      <div className="PlantVitals">
        <div className="Dashboard">
          <br />
          <br />
          <br />
          <center>
            <div className="Heading1">
              <h1 >
                {title}
                <div className="Horizontal-line"></div>
              </h1>
            </div>
            <div className="heading2">Temperature</div>
          </center>
          <div
            style={{
              border: "5px solid #d9d9d9",
              borderRadius: "20px",
              backgroundColor: "#477F34",
            }}
          >
            <Chart
              align="center"
              options={state.temperature.options}
              series={state.temperature.series}
              type="line"
              width="800"
            />
          </div>
          <center>
          <br/>
          <br/>
          <br/>
          <div className="heading2">Humidity</div>
          </center>
          <div
            style={{
              border: "5px solid #d9d9d9",
              borderRadius: "20px",
              backgroundColor: "#477F34",
            }}
          >
            <Chart
              align="center"
              options={state.humidity.options}
              series={state.humidity.series}
              type="line"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
