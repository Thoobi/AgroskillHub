import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Mainroutes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
