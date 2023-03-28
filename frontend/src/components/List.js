import React from 'react';
import '../styles/List.css';


function AfficheListDB() {
    fetch('http://localhost:4200/api/names')
        .then(response => response.json())
        .then(data => {
            return (
                data.map((name) => (
                    <div className='wcs-list-item'>name</div>
                ))
            )
        })
        .catch(error => {console.log(error)})
}

function List() {
    return(
        <div className="wcs-list">
            <h2 className="wcs-list-title"> Membres de l'équipage</h2>
            <div className="wcs-list-container">
                
                <AfficheListDB />
                

                <div className="wcs-list-item">Eleftheria</div>
                <div className="wcs-list-item">Gennadios</div>
                <div className="wcs-list-item">Lysimachos</div>
            </div>
        </div>
    )
};

export default List;