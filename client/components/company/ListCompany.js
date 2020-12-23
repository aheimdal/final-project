import React, { Fragment, useEffect, useState } from 'react';
import EditCompany from './EditCompany';
import InputCompany from './InputCompany';

const ListCompany = () => {

    const [companies, setCompanies] = useState([]);

    // Delete function
    const deleteCompanies = async (id) => {
        try {
            //https://final-project-clockin.herokuapp.com/company
            const deleteProject = await fetch(`company/${id}`, {
                method: "DELETE"
            });

            setCompanies(companies.filter(company => company.company_id !== id))
        } catch (err) {
            console.error(err.message);
        }
        
    }

    // Fetch data function 
    const getCompanies = async() => {

        try {
            //https://final-project-clockin.herokuapp.com/company
            const response = await fetch("company");
            const jsonData = await response.json();

            setCompanies(jsonData);  
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCompanies();
    }, []);

    return <Fragment>
    <header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </header>
    <InputCompany/>
    <div class = "d-flex flex-column bd-highlight mb-3">
        <h1 class="text-center p-3">Company List</h1>  
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Company Phone</th>
                <th>Company Address</th>
                <th>Company mail</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
    <tbody>
        {/*
        Reference fyrir uppbyggingu töflu sem ég mun nota - Mun breytast eitthvað
        <tr>
            <td>Ístak ehf</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>john@example.com</td>
            <td>john@example.com</td>
            <td>john@example.com</td>
        </tr>
        */ }
        {/* This is how I map to be able to use the data */}
        {companies.map(company =>(
            <tr key={company.company_id}>
                <td>{company.company_name}</td>
                <td>{company.contact_name}</td>
                <td>{company.company_phone}</td>
                <td>{company.company_address}</td>
                <td>{company.company_mail}</td>
                <td><EditCompany company={company}/></td>
            <td>
                <button class="btn btn-danger" onClick={()=> deleteCompanies(company.company_id)}>Delete</button>
            </td>
        </tr>
        ))}
    </tbody>
  </table>
  </div>
    </Fragment>
}

export default ListCompany;