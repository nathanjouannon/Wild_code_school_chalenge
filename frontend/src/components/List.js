import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/List.css';
import axios from 'axios'



function List() {

    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4200/api/names')
          .then(response => {
            setNames(response.data.names)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const nameList = names.map((name) => (
        <div className='wcs-list-item' key={name._id}>{name}</div>
    ))
    console.log(nameList)

    return(
        <div className="wcs-list">
            <h2 className="wcs-list-title"> Membres de l'équipage</h2>
            <div className="wcs-list-container">
                <div>{nameList}</div>
    
                <div className="wcs-list-item">Eleftheria</div>
                <div className="wcs-list-item">Gennadios</div>
                <div className="wcs-list-item">Lysimachos</div>
            </div>
        </div>
    )
};

export default List;