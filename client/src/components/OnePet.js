import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const OnePet = (props) => {

    const [allPets, setAllPets] = useState({})

    const deletePet = (e) => {
        console.log("Pet is adopted!")
        axios.delete(`http://localhost:8000/api/pet/delete/${props.allPetsid}`)
            .then(response => {
                console.log("requesto to adopt the pet")
                console.log(response)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.allPetsid}`)
            .then(response => {
                console.log("Response trying to get specific destination", response)
                setAllPets(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to="/">back to home</Link>
            <button className="btn btn-danger" onClick={deletePet}>Adopt a Pet</button>
            <h1>Details about:</h1>
            <h4>Pet type: {allPets.pet_type}</h4>
            <p>Pet description: {allPets.pet_description}</p>
            <h4>Pet Skills:</h4>
            <p>{allPets.skill1}</p>
            <p>{allPets.skill2}</p>
            <p>{allPets.skill3}</p>
            <button className="btn btn-success">Like {allPets.pet_name}</button>
        </div>
    );
};


export default OnePet;