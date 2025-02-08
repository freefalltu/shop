import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "components/footer";
import { NavBar } from "components/navbar";
import { useGetCurrentUserQuery } from "api/query/authApi";

const Layout = () => {
  const { isLoading, isError } = useGetCurrentUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });

  if (isLoading) {
    return <div className="loader" />;
  }

  if (isError || !localStorage.getItem("accessToken")) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div id="Main" className="wrapper">
      <div className="wrapper__header">
        <NavBar />
      </div>
      <main className="wrapper__container">
        <Outlet />
      </main>
      <div className="wrapper__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
