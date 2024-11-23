import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"


const Layout = () => {
    return (
        <div id="Main" className="wrapper">
            <div className="wrapper__header">
                <Header />
            </div>
            <main className="wrapper__container">
                <Outlet />
            </main>
            <div className="wrapper__footer">
                <Footer />
            </div>
        </div>
    )
}

export default Layout