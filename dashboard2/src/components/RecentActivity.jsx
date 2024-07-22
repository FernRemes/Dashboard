import React, {useState, useEffect } from 'react';
import CardFilter from './CardFilter.jsx';
import RecentActivityItem from './RecentActivityItem.jsx';
import './RecentActivity.css';
function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

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
    <div className = "card">
        <CardFilter filterChange = {handleFilterChange}/>

        <div className = "card-body">
            <h5 className = "card-title">
                Recent Activity <span>| {filter}</span>
            </h5>

            <div className = "activty">
                {items && items.length > 0 && items.map(item =>  (
                    <RecentActivityItem key = {item._id} item = {item} />
                ))}
            </div>
        </div>
    
    </div>
  )
}

export default RecentActivity
