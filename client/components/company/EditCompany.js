import React, { Fragment, useState } from 'react';

const EditCompany = ({ company }) => {

    const [company_name, setCompanyName] = useState(company.company_name);
    const [contact_name, setContactName] = useState(company.contact_name);
    const [company_phone, setCompanyPhone] = useState(company.company_phone);
    const [company_address, setCompanyAddress] = useState(company.company_address);
    const [company_mail, setCompanyMail] = useState(company.company_mail);

  // Edit Company_Company_Name
  const updateInfo = async e => {
    e.preventDefault();
    try {
      const body = {company_name, contact_name, company_phone, company_address, company_mail};
      //https://final-project.herokuapp.com/company
      const response = await fetch(`http://localhost:5000/company/${company.company_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";

    } catch (err) {
      console.error(err.message)
    }
  }

    // If edit is cancelled the prior changes are not carried over if you wanna finish or change your edit
    const cancelUpdate = () => {
      setCompanyName(company.company_name) 
      setContactName(company.contact_name)
      setCompanyPhone(company.company_phone)
      setCompanyAddress(company.company_address)
      setCompanyMail(company.company_mail)
    }

    return (
        <Fragment>
        <header>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </header>
        <div>
          <button type="button" 
            class="btn btn-outline-success" 
            data-toggle="modal"  
            data-target={`#id${company.company_id}`}
            >
            Edit
          </button>

          {/*
            id = id10
          */}
          <div 
            onClick={() => cancelUpdate()}
            class="modal" id={`id${company.company_id}`}>
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Company</h4>
              <button type="button" 
                class="close" 
                data-dismiss="modal"
                onClick={() => cancelUpdate()}
                >&times;</button>
            </div>

            <div class="modal-body">
              <input type="text" 
                className={"form-control mt-3"} 
                value={company_name} 
                onChange={ e => setCompanyName(e.target.value)}
                />
              <input type="text" 
                className={"form-control mt-3"} 
                value={contact_name} 
                onChange={ e => setContactName(e.target.value)}
                />
              <input type="text" 
                className={"form-control mt-3"} 
                value={company_phone} 
                onChange={ e => setCompanyPhone(e.target.value)}
                />
                <input type="text" 
                className={"form-control mt-3"} 
                value={company_address} 
                onChange={ e => setCompanyAddress(e.target.value)}
                />
                <input type="text" 
                className={"form-control mt-3"} 
                value={company_mail} 
                onChange={ e => setCompanyMail(e.target.value)}
                />
            </div>

            <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-success" 
                data-dismiss="modal"
                onClick = {e => updateInfo(e)}
              >
                Save</button>
              <button type="button" 
                class="btn btn-danger" 
                data-dismiss="modal"
                onClick={() => cancelUpdate()}
                >
                Close</button>
            </div>

            </div>
            </div>
          </div>
          </div>
        </Fragment>
    )
};

export default EditCompany;