import React from 'react';
import './PageTitle.css';
function PageTitle({page}) {
  return (
    <div className = "pagetitle">
        <h1>{page}</h1>
        <nav>
            <ol className = "breadcrumb">
                <li className = "breadcrumb-item">
                    <a href = "#">
                        <i className = "bi bi-house-door"></i>
                    </a>
                </li>
                <li className = "braedcrumb-item active"> / {page}</li>
            </ol>
        </nav>
    </div>
  )
}

export default PageTitle
