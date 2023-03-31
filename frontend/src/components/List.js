import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/List.css';
import axios from 'axios'



function List() {

    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4200/api/names')
          .then(response => {
            const namesArray = response.data.names.map(nameObj => nameObj.name);
            setNames(namesArray)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const nameList = names.map((element, index) => 
        <a className='wcs-list-item' key={index} href={"http://localhost:3000/"+index}>{element}</a>
    );

    return(
        <div className="wcs-list">
            <h2 className="wcs-list-title"> Membres de l'équipage</h2>
            <div className="wcs-list-container">
                {nameList}
            </div>
        </div>
    )
};

export default List;