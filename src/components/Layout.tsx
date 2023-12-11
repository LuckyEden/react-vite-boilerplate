import { Link, Outlet } from "react-router-dom";
import SEO from "./SEO";


export interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {


    return (
        <>
            <SEO
                title="Test"
                description="This is layout"
            />
            <header>
                header
            </header>
            <main>
                <Link to={"/pokemon"}>
                    <button className="bg-amber-600 p-2 m-2 rounded text-white">
                        Go Poke
                    </button>
                </Link>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout;