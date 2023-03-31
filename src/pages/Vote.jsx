import React, {useState, useEffect} from "react";
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

            return await response.json();

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

            callImg().then(data => setLoadedImage(data));

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    function setLoadedImage(result) {
        setImage(result[0]);
        setUrl(result[0].url);
    }

    useEffect(() => {
        callImg().then(data => setLoadedImage(data));
    }, []);

    return (
        <div className="container">
            <div className="box">
                <h2>Enjoy the kitty 😺</h2>
                <img alt="Cat" src={imgUrl === '' ? require('./../assets/default_cat.jpg') : imgUrl}/>
                {imgUrl &&
                    <button onClick={() => voteUp()}>{isLoading ? '...' : 'Vote pour moi !'}</button>
                }
            </div>
        </div>
)
}
export default Vote;