import React, {useState, useEffect } from 'react'
import './Dashboard.css';
import Cards from './Cards.jsx';
import Reports from './Reports.jsx';
import RecentSales from './RecentSales.jsx';
import TopSelling from './TopSelling.jsx';
import RecentActivity from './RecentActivity.jsx';
import BudgetReport from './BudgetReport.jsx';
import WebTraffic from './WebTraffic.jsx';
function Dashboard() {

    /* Requires Json server && JSON API Data */
    const [cards , setCards ] = useState([])
    
    const fetchData = () => {
        fetch("")
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, [])
    /* Requires Json server  && JSON API Data  */

    return (
    
    <section className="dashboard section">
        <div className = "row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        cards && cards.length > 0 && 
                        cards.map(card => <Cards key = {card.id} card = {card}/>)
                    }
                    <div className="col-12">
                        <Reports/>
                    </div>
                    <div className="col-12">
                        <RecentSales/>
                    </div>
                    <div className="col-12">
                        <TopSelling/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <RecentActivity/>
                <BudgetReport/>
                <WebTraffic/>
            </div>
        </div>
    </section>
  )
}

export default Dashboard
