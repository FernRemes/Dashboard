import React, {useState, useEffect} from 'react';
import CardFilter from './CardFilter.jsx';
import BudgetChart from './BudgetChart.jsx';
function BudgetReport() {
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

        <div className = "card-body pb-0">
            <h5 className = "card-title">
                Budget Report <span>| {filter}</span>
            </h5>
        </div>
        <BudgetChart />
    
    </div>
  )
}

export default BudgetReport
