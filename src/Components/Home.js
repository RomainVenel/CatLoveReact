import React, {useState} from "react";
import "./home.css";

const Home=() => {

    const [imgUrl, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const callImg=async () => {
        setIsLoading(true);

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");

            if (!response.ok) {
                console.log(error);
            }

            const result = await response.json();

            setUrl(result[0].url);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="container">
                <div className="box">
                    <h2>Enjoy the kitty 😺</h2>
                    <img alt="Cat" src={imgUrl === '' ? require('./../assets/default_cat.jpg') : imgUrl}/>
                    <button onClick={() => callImg()}>{isLoading ? '...' : 'Click me'}</button>
                </div>
            </div>
        </>
    )
}
export default Home;