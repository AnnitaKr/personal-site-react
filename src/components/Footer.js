import React from "react"
import {Boop} from "../Boop.js"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-icons">
            <Boop rotation="40" timing="200">
                <li><a href="https://wa.me/907139510">
                    <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                </li>
            </Boop>
            
            <Boop rotation="40" timing="200">
                    <li><a href="https://www.facebook.com/annamaria.krizovenska/">
                        <i className="fa-brands fa-facebook-square"></i>
                        </a>
                    </li>
            </Boop>
            <Boop rotation="40" timing="200">
            <li> <a href="https://www.instagram.com/ann.krzvnsk/">
                        <i className="fa-brands fa-instagram-square"></i>
                        </a>
                    </li>
            </Boop>   
                   
            <Boop rotation="40" timing="200">    
                    <li><a href="https://github.com/AnnitaKr">
                        <i className="fa-brands fa-github-square"></i>
                        </a>
                    </li>
            </Boop>
                
            </ul>
        </footer>
    )
}