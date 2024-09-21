import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Movies from "./routes/Movies";
import People from "./routes/People";
import TvShows from "./routes/TvShows";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import Person from "./routes/Person";
import TvShow from "./routes/TvShow";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/movie/:id",
        element: <Movie />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "people/:id",
        element: <Person />,
      },
      {
        path: "tvshows",
        element: <TvShows />,
      },
      {
        path: "/tvshows/show/:id",
        element: <TvShow />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
