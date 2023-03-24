import '../styles/List.css'

function List() {
    return(
        <div className="wcs-list">
            <h2 className="wcs-list-title"> Membres de l'équipage</h2>
            <div className="wcs-list-container">
                {/* remplacer ici par la liste retournée par le server */}

                <div class="wcs-list-item">Eleftheria</div>
                <div class="wcs-list-item">Gennadios</div>
                <div class="wcs-list-item">Lysimachos</div>
            </div>
        </div>
    )
};

export default List;