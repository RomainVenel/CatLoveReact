import React, {useState} from "react";
import "./../home.css";

const Vote=() => {

    const [img, setImage] = useState("");
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
            setImage(result[0]);

            setUrl(result[0].url);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const voteUp=async () => {
        setIsLoading(true);

        let body = {
            image_id: img.id,
            value: 1 // Voting up (you like it) so send 1
        };

        console.log(body);

        try {
            const response = await fetch("https://api.thecatapi.com/v1/votes", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "live_aOUWqUjalIpibXEYBFGCNMyVHhT96s8FsrWFTgkNwY2pCflpO8l1DovzMZ1gmfph",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                console.log(error);
            }

            const result = await response.json();
            console.log(result);

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
                    {imgUrl &&
                        <button onClick={() => voteUp()}>Vote up</button>
                    }
                </div>
            </div>
        </>
    )
}
export default Vote;