import React, { Fragment, useState } from 'react';

const InputCompany = () => {

    const [company_name, setCompanyName] = useState("");
    const [contact_name, setContactName] = useState("");
    const [company_phone, setCompanyPhone] = useState("");
    const [company_address, setCompanyAddress] = useState("");
    const [company_mail, setCompanyMail] = useState("");

    const onSubmitProject = async(e) => {
        e.preventDefault();
        try {
            const body = {company_name, contact_name, company_phone, company_address, company_mail};
            //https://final-project.herokuapp.com/project
            const response = await fetch("http://localhost:5000/company",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/CompanyList";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
    <Fragment>
    {/*
        Hér á ég eftir að meðhöndla þetta með Bootstrap til að breyta aðeins útlit síðunnar
        Mun notaast við - https://www.w3schools.com/bootstrap4/bootstrap_forms.asp (Form - Row & Grid)
    */}
    <header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </header>
    <div class = "container-fluid h-auto d-flex flex-column bd-highlight mb-3">
        <h1 class="text-center mt-3">Add New Company</h1>
        <form class="form-row" onSubmit={onSubmitProject}>
                <div class="col">
                    <input  
                    class="form-control mt-1"
                    type="text"
                    placeholder="Enter Company Name"
                    value={company_name} 
                    onChange={e => setCompanyName(e.target.value)}
                    />
                    <input 
                    class="form-control mt-1"
                    type="text"
                    placeholder="Enter Contact Name"
                    value={contact_name}
                    onChange={e => setContactName(e.target.value)}    
                     />
                    <input 
                    class="form-control mt-1"
                    type="text"
                    placeholder="Enter Company Phone Number"
                    value={company_phone}
                    onChange={e => setCompanyPhone(e.target.value)}
                    />
                    </div>
                <div class="col">
                 <input 
                    class="form-control mt-1"
                    type="text"
                    placeholder="Enter Company Address"
                    value={company_address}
                    onChange={e => setCompanyAddress(e.target.value)}
                 />
                 <input 
                    class="form-control mt-1"
                    type="text" 
                    placeholder="Enter Company Mail"
                    value={company_mail}
                    onChange={e => setCompanyMail(e.target.value)}
                    />
                    <div class="d-flex flex-column">
                        <button class="btn btn-success mt-2 p-1">Add</button>
                    </div>
                </div>
        </form>
    </div>
    </Fragment>
    )
}

export default InputCompany;