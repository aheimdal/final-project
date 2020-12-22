import React, { Fragment, useState } from 'react';

const EditProject = ({ project }) => {

    const [project_company_name, setProjectCompanyName] = useState(project.project_company_name);
    const [project_description, setProjectDescription] = useState(project.project_description);
    const [project_location, setProjectLocation] = useState(project.project_location);
    const [project_time, setProjectTime] = useState(project.project_time);

  // Edit Project_Company_Name
  const updateInfo = async e => {
    e.preventDefault();
    try {
      const body = {project_company_name, project_description, project_location, project_time};
      
      // proxy

      
      const response = await fetch(`/project/${project.project_id}`, {
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
      setProjectCompanyName(project.project_company_name) 
      setProjectDescription(project.project_description)
      setProjectLocation(project.project_location)
      setProjectTime(project.project_time)
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
            data-target={`#id${project.project_id}`}
            >
            Edit
          </button>

          {/*
            id = id10
          */}
          <div 
            onClick={() => cancelUpdate()}
            class="modal" id={`id${project.project_id}`}>
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Project</h4>
              <button type="button" 
                class="close" 
                data-dismiss="modal"
                onClick={() => cancelUpdate()}
                >&times;</button>
            </div>

            <div class="modal-body">
              <input type="text" 
                className={"form-control mt-3"} 
                value={project_company_name} 
                onChange={ e => setProjectCompanyName(e.target.value)}
                />
              <input type="text" 
                className={"form-control mt-3"} 
                value={project_description} 
                onChange={ e => setProjectDescription(e.target.value)}
                />
              <input type="text" 
                className={"form-control mt-3"} 
                value={project_location} 
                onChange={ e => setProjectLocation(e.target.value)}
                />
                <input type="text" 
                className={"form-control mt-3"} 
                value={project_time} 
                onChange={ e => setProjectTime(e.target.value)}
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

export default EditProject;