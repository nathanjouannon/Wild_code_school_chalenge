import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/List.css';
import axios from 'axios'




function List() {

    const [names, setNames] = useState([]);

    useEffect(() => {
          axios.get('http://localhost:4200/api/names', { headers: { "Content-Type": "application/json" }})
            .then(response => {
              setNames(response.data.names)
            })
            .catch(error => {
              console.log(error);
            });
        }, []);


    return(
        <div className="wcs-list">
            <h2 className="wcs-list-title"> Membres de l'équipage</h2>
            <div className="wcs-list-container">
                {names.map((eltName) => (
                  <div className='wcs-list-item' key={eltName._id}>{eltName.name}</div>
                ))}
            </div>
        </div>
    )
};

export default List;