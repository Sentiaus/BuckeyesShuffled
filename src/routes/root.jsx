import About from "../components/About/About";
import Navbar from "../components/Navbar";

const Root = () => {
    return(
        <div className="root w-full mt-16">
            <Navbar/>
            <About/>
        </div>
        )
}

export default Root;