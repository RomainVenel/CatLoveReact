import React from "react";

const Contact=() => {

    return (
        <div className="contact-container">
            <img alt="Cat" src={require('./../assets/my_cats.jpg')}/>
            <div id="contact-text">
                <p>Bienvenue sur mon petit projet !</p>
                <p>Pik, Roquefort et Ronron sont ravis de vous accueillir</p>
            </div>
        </div>
    )

}

export default Contact;