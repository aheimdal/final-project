import React, { Fragment, useState } from 'react';
import Stopwatch from '../Stopwatch';

const InputProject = ( ) => {

    const [project_company_name, setProject_Company_Name] = useState("");
    const [project_description, setProject_description] = useState("");
    const [project_location, setProject_location] = useState("");
    const [project_time, setProjectTime] = useState("");
    
    const onSubmitProject = async(e) => {
        e.preventDefault();
        try {
            const body = {project_company_name, project_description, project_location, project_time};
            
            //https://final-project.herokuapp.com/project
            const response = await fetch("project",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });


            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }

    //console.log(timeSaved);

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
        <Stopwatch/>
        <form class="form" onSubmit={onSubmitProject}> 
            <div class="row">
            <div class="col">
                <input 
                    class="form-control mt-1"
                    type="text" 
                    placeholder="Company Name"
                    value={project_company_name} 
                    onChange={e => setProject_Company_Name(e.target.value)}
                />
            <input  
                    class="form-control mt-1"
                    type="text"
                    placeholder="Description"
                    value={project_description}
                    onChange={e => setProject_description(e.target.value)}    
            />
            </div>
            <div class="col">
            <input 
                class="form-control mt-1"
                type="text"
                placeholder="Location"
                value={project_location}
                onChange={e => setProject_location(e.target.value)}
            />
            <input 
                class="form-control mt-1"
                type="text"
                placeholder="Total Time"
                value={project_time}
                onChange={e => setProjectTime(e.target.value)}
            />
            
            </div>
            </div>
            <div class="d-flex flex-column">
                <button class="btn btn-success mt-1" onSubmit={onSubmitProject}>Add Project</button>
            </div>
        </form>
    </div>
    </Fragment>
    )
}

export default InputProject;