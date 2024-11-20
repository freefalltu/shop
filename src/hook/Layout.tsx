import { Outlet } from "react-router-dom"
import MyHeader from "../components/UI/header/MyHeader"
import MyFooter from "../components/UI/footer/MyFooter"


const Layout = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__header">
                <MyHeader />
            </div>
            <main className="wrapper__container">
                <Outlet />
            </main>
            <div className="wrapper__footer">
                <MyFooter />
            </div>
        </div>
    )
}

export default Layout