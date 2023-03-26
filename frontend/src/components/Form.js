import '../styles/Form.css'
import {useState} from 'react'
import axios from 'axios'

function Form() {
    const [nameInput, setNameInput] = useState('');

    const submitName = () => {
        axios.post('https://localhost:3000/api/nameInput',  {nameInput: nameInput})
    };

    return (
        <div className="wcs-form-container">
            <h2 className="wcs-form-title">Ajoutez un(e) Argonaute</h2>
            <form className="wcs-form">
                Nom de l&apos;Argonaute :
                <input 
                    type="text" 
                    placeholder="Charalampos" 
                    className="wcs-form-input"
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <button 
                    className="wcs-form-submit" 
                    type='submit'
                    onClick={submitName()}
                    >Envoyer</button>
            </form>
        </div>
    )
};

export default Form;