function Footer() {
    const today = new Date()
    return ( 
        <footer className="fixed w-full flex bottom-0 p-4 items-center justify-center">
            <p><span>Franco Bernardi</span> © {today.getFullYear()} Derechos Reservados</p>
        </footer>
    );
}

export default Footer;