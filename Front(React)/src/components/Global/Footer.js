/**
 * Footer.js
 * @author Jaiván Piña
 */

//Dependencies
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let fecha = new Date();
        let anio = fecha.getFullYear();
        return (
            <footer className="">
                <div className="footer-copyright">
                    <div className="copyright">
                        © {anio} Banco Hipotecario S.A.
                        </div>
                </div>
            </footer>
        );
    }
}

export default Footer;