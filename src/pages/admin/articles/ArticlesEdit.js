import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articleService } from '../../../_services';



const ArticleEdit = () => {
    const [Article, setArticle] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    // Récupération ID utilisateur    
    const { Aid } = useParams()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setArticle({
            ...Article,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        articleService.updateArticle(Article)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'article à l'affichage
    useEffect(() => {     
        if (flag.current === false) {
            articleService.getArticle(Cid)
                .then(res => {
                    setArticle(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="ArticleEdit">
          Article Edit
          <form onSubmit={onSubmit}>
            <div className="group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" onChange={onChange} />
            </div>
            <div className="group">
              <label htmlFor="h1_title">Titre Article</label>
              <input type="text" name="h1_title" onChange={onChange} />
            </div>
            <div className="group">
              <label htmlFor="content">Contenu</label>
              <input
                type="textarea"
                name="content"
                onChange={onChange}
              />
            </div>
            <div className="group">
              <label htmlFor="image">Image</label>
              <input type="file" name="image" onChange={onChange} />
            </div>
            <div className="group">
              <label htmlFor="slug">Slug</label>
              <input type="text" name="slug" onChange={onChange} />
            </div>

            {articles.map((article) => (
          <div key={article.id} className="mb-3">
            {article.category_id >= 6 ? (
            <Form.Check
              inline
              label={article.category_name}
              name="category_id"
              type="radio"
              id={`inline-radio-${article.id}`}
              value={article.id}
              onChange={(event) => setCategoryId(event.target.value)}
            />
          ) : null}
          </div>
        ))}
    
            
            <div className="group">
              <button>Modifier</button>
            </div>
          </form>
        </div>
      );
};

export default ArticleEdit;