import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { termCategoryService } from '../../../_services';



const TermCategoryEdit = () => {
    const [TermCategory, setTermCategory] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    // Récupération ID utilisateur    
    const { uid } = useParams()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setTermCategory({
            ...TermCategory,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        termCategoryService.updateTermCategory(TermCategory)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {     
        if (flag.current === false) {
            termCategoryService.getTermCategory(uid)
                .then(res => {
                    setTermCategory(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="TermCategoryEdit">
            TermCategory Edit
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
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default TermCategoryEdit;