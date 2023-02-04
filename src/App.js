import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Root from "./routes/root";
import Que from "./routes/que";
import CoffeeQ1 from "./routes/coffee-q1";
import Result from "./routes/result";
import TestResult from "./routes/test-result";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "que",
    element: <Que />
  },
  {
    path: "coffee-q1",
    element: <CoffeeQ1 />
  },  {
    path: "result",
    element: <Result />
  }, {
    path: "test-result",
    element: <TestResult />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AmplifyProvider>
        <RouterProvider router={router} />
    </AmplifyProvider>
  </React.StrictMode>
);