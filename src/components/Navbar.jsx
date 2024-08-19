import logo from "/shuffle.png";
import { useEffect, useRef } from 'react';

const Navbar = () => {
    // Create a ref for the "about" link
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Scroll to the section when the "about" link is clicked
            if (aboutRef.current) {
                aboutRef.current.addEventListener("click", () => {
                    const section = document.getElementById("#who");
                    if (section) {
                        const sectionTop = section.offsetTop;
                        window.scrollTo({
                            top: sectionTop,
                            behavior: "smooth"
                        });
                    }
                });
            }
        };

        handleScroll(); // Call the handler function

        // Cleanup event listener on unmount
        return () => {
            if (aboutRef.current) {
                aboutRef.current.removeEventListener("click", handleScroll);
            }
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-100">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                
                <a href="/"><img
                    className="hidden md:block text-lg font-bold rounded-l-md"
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo"
                /></a>
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <ul className="flex items-center justify-center md:justify-between md:gap-2 w-full md:auto">
                        <li className="px-4 font-semibold hover:text-red-700">
                            <a href="/">Home</a>
                        </li>
                        <li className="px-4 font-semibold hover:text-red-700">
                            <a href="#who" ref={aboutRef}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

