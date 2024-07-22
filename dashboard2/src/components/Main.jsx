import React from 'react';
import './Main.css';
import PageTitle from './PageTitle.jsx';
import Dashboard from './Dashboard.jsx';
function Main() {
  return (
    <main id = "main" className = "main">
        <PageTitle page = "Dashboard"/>
        <Dashboard />
    </main>
  )
}

export default Main
