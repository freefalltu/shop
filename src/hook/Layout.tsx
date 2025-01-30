import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "components/footer";
import { NavBar } from "components/navbar";
import { useGetCurrentUserQuery, CustomError } from "api/query/authApi";
import { useEffect } from "react";

const Layout = () => {
  const { error, isLoading } = useGetCurrentUserQuery();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      (error as CustomError)?.status === 401 ||
      (error as CustomError)?.status === 403
    ) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <div className="loader" />;
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
