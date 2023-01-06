import ContactOption from "../Components/ContactMe/contactOption";

function ContactMe() {
    return ( 
        <section className='w-full gap-10 h-screen flex flex-col justify-center items-center'>
            <h1 className="font-bold text-4xl mb-10">Let's work together!</h1>
            <ContactOption/>
        </section>
    );
}

export default ContactMe;