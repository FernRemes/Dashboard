import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer id = "footer" className = "footer">
        <div className = "copyright">
            &copy; Copyright{' '}
            <strong>
                <a href = "https://github.com/FernRemes"><span>Fernando Remes</span></a>
            </strong>
            . All Rights Reserved
        </div>
        <div className = "credits">
            Designed by <a href = "https://github.com/FernRemes"><span>Fernando Remes</span></a>
        </div>
    </footer>
  ) 
}

export default Footer
