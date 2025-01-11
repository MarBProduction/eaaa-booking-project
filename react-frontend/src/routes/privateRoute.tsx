import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";

const PrivateRoute = observer(() => {
  const { userStore } = useStores();
  const { userId } = userStore;
  if (userId <= 0) return <Navigate to="/" />;

  return <Outlet />;
})

export default PrivateRoute;
