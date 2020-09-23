import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
  const ids = {
    India: 2867714,
    Canada: 2643743,
    California: 4350049,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=58c41bf8d9msh2be11cb346c4defp1c697cjsnfacc32b91a93`
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      India: fetches[0],
      Canada: fetches[1],
      California: fetches[2],
    },
  });
};
