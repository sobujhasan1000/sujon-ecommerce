import { RouterProvider } from "react-router";
import router from "./Router/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
