import React, {useState, useEffect} from 'react';
import './RecentSales.css';
import CardFilter from './CardFilter.jsx';
import RecentSalesTable from './RecentSalesTable.jsx';
function RecentSales() {
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
    <div className = "card recent-sales overflow-auto">
        <CardFilter filterChange = {handleFilterChange} />

        <div className = "card-body">
            <h5 className = "card-title">
                Recent Sales <span>| {filter}</span>
            </h5>
            <RecentSalesTable items = {items} />
        </div>
    </div>
  )
}

export default RecentSales
