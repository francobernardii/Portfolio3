import Typed from 'react-typed';

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
            <button className='text-gray-50 text-2xl mt-10 p-4 rounded-xl  bg-yellow-500 hover:bg-yellow-600 hover:duration-700 hover:scale-105'>Download CV</button>
        </section>
    )
}

export default Home;