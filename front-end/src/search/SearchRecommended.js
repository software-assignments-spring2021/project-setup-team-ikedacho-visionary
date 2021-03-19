import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchRecommended.css'
import { Link } from 'react-router-dom'
import PostContent from '../auxiliary/PostContent'

const SearchRecommended = (props) => {
    const [data, setData] = useState([])

    // the following side-effect will be called once upon initial render
    useEffect(() => {

        axios('https://my.api.mockaroo.com/search_recommended.json?key=2d6d6d60')
            .then((response) => {
                // extract the data from the server response
                setData(response.data)
            })
            .catch((err) => {
                const backupData = [
                ]
                setData(backupData)
            })
        }, []) // only run it once!

    return (
        <div className = "SearchRecommended">
            <section>
                {data.map((item) => (
                    <p>{item.topic}</p>
                ))}
            </section>

        </div>
    );
}

export default SearchRecommended;