import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categoryService } from '../../../_services';



const CategoryEdit = () => {
    const [Category, setCategory] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    // Récupération ID utilisateur    
    const { Cid } = useParams()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setCategory({
            ...Category,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        categoryService.updateCategory(Category)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {     
        if (flag.current === false) {
            categoryService.getCategory(Cid)
                .then(res => {
                    setCategory(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="CategoryEdit">
          Category Edit
          <form onSubmit={onSubmit}>
            <div className="group">
              <label htmlFor="nom">Nom</label>
              <input type="text" name="category_name" onChange={onChange} />
            </div>
            <div className="group">
              <label htmlFor="category_description">Description</label>
              <input
                type="textarea"
                name="category_description"
                onChange={onChange}
              />
            </div>
            <div className="group">
              <label htmlFor="category_slug">Slug</label>
              <input type="text" name="category_slug" onChange={onChange} />
            </div>
    
            {/*A FAIRE POUR AFFICHER LES BTN RADIO AVEC LE NOM DES TERM CAT */
            /* <div className="group">
              {['radio'].map((category) => (
                <div key={`{category.id}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    onChange={onChange}
                  />
                </div>
              ))}
            </div> */}
            <div className="group">
              <button>Ajouter</button>
            </div>
          </form>
        </div>
      );
};

export default CategoryEdit;