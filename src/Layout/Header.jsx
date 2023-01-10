import Logo from "../Components/Header/Logo";
import NavBar from "../Components/Header/NavBar";
import {navBarButtons} from "src/Components/Header/config.js"

function Header() {
    return ( 
        <header className="w-full fixed h-20 flex flex-col items-center sm:h-28 sm:grid">
            <NavBar navBarButtons={navBarButtons}/>
        </header>
    );
}

export default Header;