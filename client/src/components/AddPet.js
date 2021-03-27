import React, { useState } from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const AddPet = () => {

    const [addPet, setaddPet] = useState({
        pet_name: "",
        pet_type: "",
        pet_description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    })

    const [errors, setErrors] = useState({})


    const changeHandler = (e) => {
        console.log("Changing input")
        console.log(e.target)
        setaddPet({
            ...addPet,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pet", addPet)
            .then(response => {
                console.log(response => ("response from the result", response))
                if (response.data.errors) {
                    console.log("You made a validation errror")
                    setErrors(response.data.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h1>Know a pet needing a home?</h1>
            <form onSubmit={submitHandler} className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Pet name:</label>
                    <input type="text" name="pet_name" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.pet_name ? errors.pet_name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet type:</label>
                    <input type="text" name="pet_type" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.pet_type ? errors.pet_type.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="pet_description" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.pet_description ? errors.pet_description.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" name="skill1" id="" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" name="skill2" id="" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" name="skill3" id="" className="form-control" onChange={changeHandler} />
                </div>
                <input type="submit" value="Add Pet!" className="btn btn-success" />
            </form>
        </div>
    );
};


export default AddPet;