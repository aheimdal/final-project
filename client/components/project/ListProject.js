import React, { Fragment, useEffect, useState } from 'react';
import EditProject from './EditProject';

const ListProject = () => {

    const [projects, setProjects] = useState([]);

    // Delete function
    const deleteProjects = async (id) => {
        try {
            //https://final-project.herokuapp.com/project
            const deleteProject = await fetch(`project/${id}`, {
                method: "DELETE"
            });
            setProjects(projects.filter(project => project.project_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    // Fetch data function 
    const getProjects = async() => {

        try {
            //https://final-project.herokuapp.com/project
            const response = await fetch("project");
            const jsonData = await response.json();

            setProjects(jsonData);  
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);


    return <Fragment>
    <header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </header>
    <div class = "d-flex flex-column bd-highlight mb-3">
        <h1 class="text-center p-3">Project List</h1> 
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                <th>Company Name</th>
                <th>Description</th>
                <th>Location</th>
                <th>Total Time</th>
                <th>Edit</th>
                <th>Delete</th>
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
        {projects.map(project =>(
            <tr key={project.project_id}>
                <td>{project.project_company_name}</td>
                <td>{project.project_description}</td>
                <td>{project.project_location}</td>
                <td>{
                        ("0" + Math.floor(project.project_time / 3600) % 24).slice(-2)
                    }:
                    {
                        ("0" + Math.floor(project.project_time / 60) % 60).slice(-2)
                    }
                    :{
                        ("0" + (project.project_time) % 60).slice(-2)
                    }
                    </td>
                <td><EditProject project={project}/></td>
            <td>
                <button class="btn btn-danger" onClick={()=> deleteProjects(project.project_id)}>Delete</button>
            </td>
        </tr>
        ))}
    </tbody>
  </table>
  </div>
    </Fragment>
}

export default ListProject;