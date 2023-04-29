import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../utils/store/hook";

export default function Layout() {
    const pokeName = useAppSelector((state) => state.pokemon.name);
    return(
        <>
        <header>
            header - {pokeName}
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