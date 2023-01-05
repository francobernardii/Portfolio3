function Logo({src,alt}) {
    return ( 
        <div className="hidden sm:col-span-1 sm:flex justify-center">
            <a href="/">
                <img src={src} alt={alt} className="w-2/3"/>
            </a>
        </div>
    );
}

export default Logo;