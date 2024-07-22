import React, {useState, useEffect} from 'react';
import './TopSelling.css';
import CardFilter from './CardFilter.jsx';
function TopSelling() {
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
    <div className = "card top-selling overflow-auto">
        <CardFilter filter={filter} handleFilterChange={handleFilterChange} />
        <div className = "card-body pb-0">
            <h5 className = "card-title">
                Top Selling <span>| {filter}</span>
            </h5>

            <table className = "table table-borderless">
                <thead>
                    <tr>
                        <th scope = "col">Preview</th>
                        <th scope = "col">Product</th>
                        <th scope = "col">Price</th>
                        <th scope = "col">Sold</th>
                        <th scope = "col">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.length > 0 &&
                    items.map(item => <TopSellingItem key = {item._id} item = {item} />
                    )}
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default TopSelling
