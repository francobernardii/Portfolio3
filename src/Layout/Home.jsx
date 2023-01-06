import Typed from 'react-typed';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <section className='w-full h-screen flex flex-col justify-center items-center text-5xl'>
            <h1>Hi! I'm</h1>
            <Typed
                    strings={['Franco Bernardi','a Software Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    backDelay={1000}
                    className="text-yellow-500 font-bold"
            />
            <Link to="src/assets/Programmer - Franco Bernardi.pdf" target="_blank" download  className='bg-white hover:bg-gray-100 text-gray-800 p-4 mt-10 border border-gray-400 rounded shadow text-2xl hover:scale-105 duration-500'>Download CV</Link>
        </section>
    )
}

export default Home;