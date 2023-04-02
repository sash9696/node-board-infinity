import axios from 'axios';
import React, { useState, useEffect } from 'react'
import PrintComponent from './PrintComponent';

function FreeComponent() {

    //for message that we will recieve from api call
    const [message, setMessage] = useState("");

    //useEffect will run once whenever the page is fully loaded
    useEffect(() => {
        // set configurations for the api call

        const configuration = {
            method: "get",
            url: "http://localhost:3000/free-endpoint"
        }

        //make the api call

        axios(configuration)
            .then((result) => {
                // assign the message in our result
                setMessage(result.data.message)
            })
            .catch((error) => {
                error = new Error()
            })

    }, [])
    return (
        <div>
            <h1 className='text-center'>Free Component</h1>

            <h3 className='text-center text-danger'>{message}</h3>

            <PrintComponent />
        </div>
    )
}

export default FreeComponent