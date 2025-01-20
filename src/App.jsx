import { RouterProvider } from "react-router";
import router from "./Router/Router";
import { UserProvider } from "./Context/UserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
};

export default App;
