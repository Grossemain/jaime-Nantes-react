import React, { useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '../../../_services/user.service';



const UserEdit = () => {
    const [user, setUser] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    // Récupération ID utilisateur    
    const { uid } = useParams()

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err))
    }

    // Récupération de l'utilisateur à l'affichage
    useEffect(() => {     
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    setUser(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="UserEdit">
            User Edit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="first_name">Nom</label>
                    <input type="text" name="first_name" value={user.first_name} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="last_name">Prenom</label>
                    <input type="text" name="last_name" value={user.last_name} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="user_name">Nom utilisateur</label>
                    <input type="text" name="user_name" value={user.user_name} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" value={user.password} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;