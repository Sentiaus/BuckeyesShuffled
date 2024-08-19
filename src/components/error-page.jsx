import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry an error has occured.</p>
        </div>
    )
}

export default Error;