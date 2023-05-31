import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/global.css'
import DataPreparation from './pages/data-preparation/DataPreparation';
import RootLayout from "./pages/root-layout/RootLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <DataPreparation />,
      },
      {
        path: "datasets",
        element: <DataPreparation/>
      },
      {
        path: "search",
        element: <DataPreparation/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;