const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

// process.env.PORT
// provess.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

//app.use(express.static(path.join(__dirname, "client/out")));
//app.use(express.static("client/out"));

if(process.env.NODE_ENV === "production"){
    // server static content
    // npm run build
    app.use(express.static(path.join(__dirname, "client/out")));
}

//ROUTES

//create an item

// create a company item
app.post("/company", async(req, res) => {
    try {
    
        /* 
        Going to go over this to see how I can relay information and match to the corresponging company when I have to
        */
        
        const { company_name } = req.body;
        const { contact_name } = req.body;
        const { company_phone } = req.body;
        const { company_address } = req.body;
        const { company_mail } = req.body;
        
        const newCompany = await pool.query("INSERT INTO company (company_name, contact_name, company_phone, company_address, company_mail) Values($1,$2,$3,$4,$5) RETURNING *", [company_name, contact_name, company_phone, company_address, company_mail]);

        res.json(newCompany.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// create a project item
app.post("/project", async(req, res) => {
    try {
    
        const { project_company_name } = req.body;
        const { project_description } = req.body;
        const { project_location } = req.body;
        const { project_time } = req.body;
        const { project_timeStamp } = req.body;
        
        const newProject = await pool.query("INSERT INTO project (project_company_name, project_description, project_location, project_time, project_timeStamp) Values($1,$2,$3,$4, $5) RETURNING *", [project_company_name, project_description, project_location, project_time, project_timeStamp]);

        res.json(newProject.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//get all items

// gets company list
app.get("/company", async(req, res) => {
    try {
        const allCompany = await pool.query("SELECT * FROM company");
        res.json(allCompany.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// gets Project list
app.get("/project", async(req, res) => {
    try {
        const allProject = await pool.query("SELECT * FROM project");
        res.json(allProject.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get an item

// gets company list
app.get("/company/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const allCompany = await pool.query("SELECT * FROM company WHERE company_id=$1", [id]);
        res.json(allCompany.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// gets Project list
app.get("/project/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const allProject = await pool.query("SELECT * FROM project WHERE project_id=$1", [id]);
        res.json(allProject.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


//updates items

// updates company item
app.put("/company/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const { company_name } = req.body;
        const { contact_name } = req.body;
        const { company_phone } = req.body;
        const { company_address } = req.body;
        const { company_mail } = req.body;

        const updateCompany = await pool.query("UPDATE company SET company_name = $1, contact_name = $2 , company_phone = $3 , company_address = $4, company_mail = $5 WHERE company_id=$6", 
        [company_name, contact_name, company_phone, company_address, company_mail, id]);
        
        res.json("Company-list was updated")
    } catch (err) {
        console.error(err.message);
    }
})

// updates Project item
app.put("/project/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const { project_company_name } = req.body;
        const { project_description } = req.body;
        const { project_location } = req.body;
        const { project_time } = req.body;
        const { project_timeStamp } = req.body;

        const updateProject = await pool.query("UPDATE project SET project_company_name = $1, project_description = $2, project_location = $3, project_time = $4, project_timeStamp=$5 WHERE project_id=$6", 
        [project_company_name, project_description, project_location, project_time, project_timeStamp, id]);

        res.json("Project-list was updated");
    } catch (err) {
        console.error(err.message);
    }
})
/
//delete items

// delete company item
app.delete("/company/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteCompany = await pool.query("DELETE FROM company WHERE company_id=$1", [id]);
        res.json("Company was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

// delete Project item
app.delete("/project/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteProject = await pool.query("DELETE FROM project WHERE project_id=$1", [id]);
        res.json("Project was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client/out/index.html"))
});

app.listen(PORT, () =>{
    console.log(`Server has started on port ${PORT}`)
})