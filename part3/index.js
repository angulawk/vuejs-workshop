const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use('/', express.static('public'));
app.use('/js/axios.js', express.static('node_modules/axios/dist/axios.js'))
app.use('/js/vue.js', express.static('node_modules/vue/dist/vue.js'))
const todoList = []
app.get('/api', (req, res) => {
    res.json(todoList)
})
app.post('/api', (req, res) => {
    todoList.push(req.body.task)
    res.json(todoList)
})
app.delete('/api', (req, res) => {
    todoList.splice(0,todoList.length)
    res.json(todoList)
})
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})