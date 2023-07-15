import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <body className="d-flex flex-column fixed-bottom">
      
      <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </body>
  )
}

export default Footer