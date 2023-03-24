import '../styles/Form.css'

function Form() {
    return (
        <div className="wcs-form-container">
            <h2 className="wcs-form-title">Ajoutez un(e) Argonaute</h2>
            <form className="wcs-form" method='/api/form'>
                Nom de l&apos;Argonaute :
                <input 
                    type="text" 
                    placeholder="Charalampos" 
                    className="wcs-form-input"
                />
                <button className="wcs-form-submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Form;