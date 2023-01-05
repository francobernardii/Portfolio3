function NavBar({navBarButtons}) {
    return ( 
        <nav className="hidden sm:block text-lg">
            <ul className="sm:flex justify-around items-center">
                {
                    navBarButtons.map((button, index) => {
                        return (
                        <a key={index} href={button.url}>
                            <li>{button.text}</li>
                            <img src={button.iconURL} alt={button.iconALT} />
                        </a>
                        )
                    })
                }
            </ul>
        </nav>
    );
}
export default NavBar;