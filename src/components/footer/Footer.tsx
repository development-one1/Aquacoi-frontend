import React from 'react';
import './footer.css';
import { JSX } from 'react/jsx-runtime';

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    © 2025 <a href="#">Aquacoi</a>.
                </div>
                <div className="footer-right">
                    <a href="/">Inicio</a>
                    <a href="/productos">Productos</a>
                    <a href="/nosotros">Nosotros</a>
                    <a href="/inicio#contacto">Contacto</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
