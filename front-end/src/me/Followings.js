import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Followings.css'
import { Link, useLocation, useHistory} from 'react-router-dom'
import NameTag from '../auxiliary/NameTag'

const Followings = (props) => {
    const [data, setData] = useState([])
    const {state} = useLocation()
    const history = useHistory()

    // go back to the previous page
    const goTOPreviousPath = () => {
        history.goBack()
    }

    useEffect(() => {
        axios
            .get('/api_followings', {
                params: {
                    UserName: state.UserName
                }
            })
            .then((response) => {
                // extract the data from the server response
                setData(response.data)
            })
            .catch((err) => {
                console.error(err)
            })
        }, []) // only run it once!

    return (
        <div className = "Followings">
            <h2>Followings Page here</h2>
            <Link onClick = {goTOPreviousPath.bind()}>
                <button>back</button>
            </Link>
            <section className = "main-content">
                <p>
                    {data.map((item) => (
                        <NameTag 
                            key={item.id}
                            img = {item.img}
                            UserName = {item.UserName}
                            bio = {item.bio}
                            action = {item.action} />
                    ))}
                </p>
            </section>
        </div>
    );
}

export default Followings;