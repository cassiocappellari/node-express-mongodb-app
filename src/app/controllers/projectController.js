const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Project = require('../models/project')
const Tasks = require('../models/task')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('user')

        return res.send({projects})
    } catch (err) {
        return res.status(400).send({error: 'error loading projects'})
    }
})

router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate('user')

        return res.send({project})
    } catch (err) {
        return res.status(400).send({error: 'error loading project'})
    }
})

router.post('/', async (req, res) => {
    try {
        const project = await Project.create({...req.body, user: req.userId})


        return res.send({project})
    } catch (err) {
        return res.status(400).send({error: 'error creating new project'})
    }
})

router.put('/:projectId', async (req, res) => {
    res.send({user: req.userId})
})

router.delete('/:projectId', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId)

        return res.send({message: 'project successfully removed'})
    } catch (err) {
        return res.status(400).send({error: 'error removing project'})
    }
})

module.exports = app => app.use('/projects', router)