import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Modules/Shared/Components/AuthLayout/AuthLayout";
import NotFound from "./Modules/Shared/Components/NotFound/NotFound";
import Login from "./Modules/AuthModule/Components/Login/Login";
import Register from "./Modules/AuthModule/Components/Register/Register";
import ForgetPassword from "./Modules/AuthModule/Components/ForgetPassword/ForgetPassword";
import ResetPassword from "./Modules/AuthModule/Components/ResetPassword/ResetPassword";
import Home from "./Modules/HomeModule/Components/Home/Home";
import MasterLayout from "./Modules/Shared/Components/MasterLayout/MasterLayout";
import Protected from "./Protected/Protected";
import Books from "./Modules/HomeModule/Components/Books/Books";
import BookDetails from "./Modules/HomeModule/Components/BookDetails/BookDetails";
import CartDetails from "./Modules/CartModule/Components/CartDetails/CartDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forget_password", element: <ForgetPassword /> },
        { path: "reset_password", element: <ResetPassword /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <MasterLayout />
        </Protected>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "books", element: <Books /> },
        { path: "books/:id", element: <BookDetails /> },
        { path: "cart", element: <CartDetails /> },
        // {path: 'order', element: <Order/>},
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
