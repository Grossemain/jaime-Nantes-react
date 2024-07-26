import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { termCategoryService } from '../../../_services';

const TermCategoryCreate = () => {
    const [termCategory, setTermCategory] = useState([])
    let navigate = useNavigate()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setTermCategory({
            ...termCategory,
            [e.target.name]: e.target.value
        })
    }

    // Gestion de la soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()

        termCategoryService.addTermCategory(termCategory)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="TermCategoryEdit">
            TermCategory Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="term_category_name" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="term_category_description">Description</label>
                    <input type="text" name="term_category_description" onChange={onChange} />
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default TermCategoryCreate;