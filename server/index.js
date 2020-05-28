require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express")
const massive = require("massive")
const { CONNECTION_STRING, SERVER_PORT } = process.env
const app = express()

//Controllers
const peopleCtrl = require("./controllers/peopleController")

//Middleware
app.use(express.json())

//Database Connection
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db)
    console.log("Database connected")
    app.listen(SERVER_PORT, () =>
      console.log(`Server listening on ${SERVER_PORT}`)
    )
  })
  .catch((err) => console.log(err))

//Endpoints
app.get("/api/person/:id", peopleCtrl.getPerson)
app.get("/api/people", peopleCtrl.getPeople)
app.post("/api/people", peopleCtrl.addPerson)
app.delete("/api/people/:id", peopleCtrl.deletePerson)
app.put("/api/people/:id", peopleCtrl.editPerson)
