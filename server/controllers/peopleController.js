module.exports = {
    getPerson: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_person(id).then(results => {
            const person = results[0]
            res.status(200).send(person)
        }).catch(err => res.status(500).send(err))
    },
    getPeople: (req, res) => {
        const db = req.app.get('db')
        db.get_people().then(results => {
            res.status(200).send(results)
        }).catch(err => res.status(500).send(results))
    },
    addPerson: (req, res) => {
        const db = req.app.get('db')
        const {name, age} = req.body
        db.add_person(name, age).then(results => {
            res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
    },
    deletePerson: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_person(id).then(results => {
            res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
    },
    editPerson: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, age} = req.body
        db.edit_person(id, name, age).then(results => {
            res.status(200).send(results)
        }).catch(err => res.status(500).send(err))
    }
}