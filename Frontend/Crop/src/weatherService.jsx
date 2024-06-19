/* eslint-disable no-unused-vars */
const API_KEY = "d7e00bfe9b27053235a7febf3723ddef";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
import { DateTime } from "luxon";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((response) => response.json());
};

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc,dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, humidity },
    name,
    dt,
    sys: { country },
    timezone,
  } = data;

  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    lat,
    lon,
    temp: temp - 273.15,
    humidity,
    name,
    dt,
    country,
    timezone,
    formattedLocalTime,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  const threeHourly = data
    .filter((f) => f.dt > secs)
    .slice(0, 10)
    .map((f) => ({
      humidity: f.main.humidity,
      temp: f.main.temp - 273.15,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      date: f.dt_txt,
    }));

  return { threeHourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...formattedCurrentWeather, formattedForecastWeather };
};

export default getFormattedWeatherData;
