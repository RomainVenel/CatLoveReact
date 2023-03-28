import React, {useState, useEffect, useMemo} from "react";
import "./../home.css";

const Favoris=() => {

    const [imgUrls, setUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const callImg=async () => {
        setIsLoading(true);

        try {
            const response = await fetch("https://api.thecatapi.com/v1/votes", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "live_aOUWqUjalIpibXEYBFGCNMyVHhT96s8FsrWFTgkNwY2pCflpO8l1DovzMZ1gmfph",
                },
            });


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

    useEffect(() => {
        callImg();
    }, []);

    let allImgs = useMemo(() =>callImg(), []);
    allImgs.then(value => setUrls(value));

    return (
        <>
            <div className="container-cats">
                {imgUrls.map((url, key) =>
                    <div className="cats">
                        <img key={key} alt="Cat" src={url.image.url}/>
                    </div>
                )}

            </div>
        </>
    )
}
export default Favoris;