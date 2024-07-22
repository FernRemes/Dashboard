import React, {useState, useEffect} from 'react'
import WebTrafficChart from './WebTrafficChart';
import CardFilter from './CardFilter';
function WebTraffic() {
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
                Web Traffic <span>| {filter}</span>
            </h5>
        </div>
        <WebTrafficChart />
    
    </div>
  )
}

export default WebTraffic
