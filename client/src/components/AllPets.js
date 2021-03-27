import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import axios from 'axios'

const AllPets = () => {

    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/all")
            .then(response => {
                console.log("request for all pets")
                console.log(response)
                console.log("request for all pets")
                setAllPets(response.data)
            })
            .catch(err => console.log("error retriving the pet", err))
    }, [])

    return (
        <div>
            <Link to="/pet">Add a pet to shelter</Link>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">These pets are looking for a good home</h4>
                    {allPets.map((Allpets, i) => {
                        return <div className="card col-8 mx-auto" key={i}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{Allpets.pet_name}</td>
                                        <td>{Allpets.pet_type}</td>
                                        <td><p><Link to={`/pet/${Allpets._id}`}>Details</Link>
                                            |<Link to={`pet/update/${Allpets._id}`}>Edit</Link></p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};


export default AllPets;