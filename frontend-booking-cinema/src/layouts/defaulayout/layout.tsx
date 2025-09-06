import Footer from "../../components/footer"
import Header from "../../components/header"
import { Outlet} from "react-router-dom";
const DefaultLayOut = () => {
  return (
    <div className="default-layout">
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    </div>
  )
}

export default DefaultLayOut