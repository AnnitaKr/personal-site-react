import React from "react"
import profileImage from "../imgs/mathilde-langevin-PaCzyxEcqiw-unsplash.jpg"

export default function Info() {
    return (
        <>
        <img src={profileImage} alt="me" />
        <header className="info">
            <h1 className="primary-heading">Annamaria Krizovenska</h1>
            <p className="profession">Frontend Developer</p>
            <div className="buttons-div">
                <a className="link-info" href="mailto:annamaria.krizovenska@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
                <a className="link-info" href="https://www.linkedin.com/in/annamaria-krizovenska-5159b0218/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
        </>
       
    )
}

