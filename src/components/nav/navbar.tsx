"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header className={`navbar ${isMobileOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <div className="logo-section">
          <Image 
            src="/logo.png" 
            alt="AQUACOI logo" 
            width={160} 
            height={60} 
            priority
          />
        </div>

        {isMobileView && (
          <button
            className={`menu-toggle ${isMobileOpen ? "open" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menú"
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          <Link href="/" className="nav-item" onClick={() => setIsMobileOpen(false)}>Inicio</Link>
          
          {/* Menú de productos con hover */}
          <div 
            className="products-menu" 
            onMouseEnter={() => !isMobileView && setIsProductsHovered(true)}
            onMouseLeave={() => !isMobileView && setIsProductsHovered(false)}
          >
            <Link 
              href="/productos" 
              className="nav-item products-toggle" 
              onClick={() => {
                if (isMobileView) {
                  setIsMobileOpen(false);
                  setIsProductsHovered(!isProductsHovered);
                }
              }}
            >
              Productos
              {!isMobileView }
            </Link>
            
            {(isProductsHovered || (isMobileOpen && isMobileView)) && (
              <div className={`products-dropdown ${isMobileView ? "mobile" : ""}`}>
                <Link href="/osmosis" className="dropdown-item" onClick={() => {
                  setIsMobileOpen(false);
                  setIsProductsHovered(false);
                }}>Sistemas de Ósmosis</Link>
                <Link href="/sistemas-de-filtrado-y-descalcificacion" className="dropdown-item" onClick={() => {
                  setIsMobileOpen(false);
                  setIsProductsHovered(false);
                }}>Sistemas de Filtrado y Descalcificación</Link>
                <Link href="/sistemas-de-lavado" className="dropdown-item" onClick={() => {
                  setIsMobileOpen(false);
                  setIsProductsHovered(false);
                }}>Sistemas de Lavado</Link>
                <Link href="/accesorios-y-opcionales" className="dropdown-item" onClick={() => {
                  setIsMobileOpen(false);
                  setIsProductsHovered(false);
                }}>Accesorios y Opcionales</Link>
              </div>
            )}
          </div>
          
          <Link href="/nosotros" className="nav-item" onClick={() => setIsMobileOpen(false)}>¿Quiénes Somos?</Link>
          <Link href="/contacto" className="nav-item" onClick={() => setIsMobileOpen(false)}>Contacto</Link>
          <Link href="/blog" className="nav-item" onClick={() => setIsMobileOpen(false)}>Blog</Link>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          <Link href="/acceso-clientes" className="client-button" onClick={() => setIsMobileOpen(false)}>
            <span>ACCESO CLIENTES</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}