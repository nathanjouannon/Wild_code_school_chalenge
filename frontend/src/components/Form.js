import '../styles/Form.css';
import {useState} from 'react';
import axios from 'axios';



function Form() {
    const [nameInput, setNameInput] = useState('');

    const handleSubmit = (event) => {
        // event.preventDefault();
        axios.post('http://localhost:4200/api/names', {name: nameInput},  {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                // Traiter la réponse ici
            })
            .catch(function (error) {
                console.log(error);
                // Traiter l'erreur ici
            });
    }

    return (
        <div className="wcs-form-container">
            <h2 className="wcs-form-title">Ajoutez un(e) Argonaute</h2>
            <form className="wcs-form" onSubmit={handleSubmit}>
                Nom de l&apos;Argonaute :
                <input 
                    type="text" 
                    placeholder="Charalampos" 
                    className="wcs-form-input"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <button 
                    className="wcs-form-submit" 
                    type='submit'
                    >Envoyer</button>
            </form>
        </div>
    )
};

export default Form;