function AboutMe() {
    return ( 
        <section className='w-full sm:h-screen flex flex-col justify-center items-center p-10'>
            <img src="src/assets/AboutMe/Foto CV.jpg" alt="" className="rounded-full w-56 sm:w-72 sm:mt-32 sm:mb-10"/>
            <div className="p-4 w-1/2 sm:h-1/2 m-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5 items-center text-center sm:items-start">
                    <h1 className="text-lg font-bold">First Name & Last Name 📋</h1>
                    <span>Franco Bernardi</span>
                </div>
                <div className="flex flex-col gap-5 items-center text-center sm:items-start">
                    <h1 className="text-lg font-bold">Location 🎯</h1>
                    <span>San Nicolás de los Arroyos, Buenos Aires - Argentina</span>
                </div>
                <div className="flex flex-col gap-5 items-center text-center sm:items-start">
                    <h1 className="text-lg font-bold">Profession 💼</h1>
                    <span>&#x2022; Security Analyst Jr</span>
                    <span>&#x2022; Advanced Student of Programming</span>
                </div>
                <div className="flex flex-col gap-5 items-center text-center sm:items-start">
                    <h1 className="text-lg font-bold">Idiomas 🌎</h1>
                    <span>&#x2022; <b>Spanish:</b> Native</span>
                    <span>&#x2022; <b>English:</b> Intermidiate (B2)</span>
                </div>
                <div className="flex flex-col gap-5 items-center sm:items-start sm:col-span-2">
                    <h1 className="text-lg font-bold">Technologies 💻</h1>
                    <div className="grid sm:grid-cols-4 gap-10 items-center text-center sm:text-left sm:items-start">
                        <span>&#x2022; HTML - CSS</span>
                        <span>&#x2022; Javascript</span>
                        <span>&#x2022; React</span>
                        <span>&#x2022; C#</span>
                        <span>&#x2022; SQL Server</span>
                        <span>&#x2022; Tailwind - Bootstrap - Sass</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;