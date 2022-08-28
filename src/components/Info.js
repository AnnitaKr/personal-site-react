import React from "react"
import profileImage from "../imgs/mathilde-langevin-PaCzyxEcqiw-unsplash.jpg"

export default function Info() {
    return (
        <header className="info">
            <img src={profileImage} alt="me" />
            <h1 className="primary-heading">Annamaria Krizovenska</h1>
            <p className="profession">Frontend Developer</p>
            <p className="website">annamaria.website</p>
            <div className="buttons-div">
                <a href="https://mail.google.com/mail/"><i className="fa-solid fa-envelope"></i> Email</a>
                <a href="www.linkedin.com/in/annamaria-krizovenska-5159b0218"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
    )
}

