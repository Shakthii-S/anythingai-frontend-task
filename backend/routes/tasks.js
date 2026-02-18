const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE TASK
router.post("/", auth, async (req, res) => {

    try {

        const task = new Task({
            userId: req.user.id,
            title: req.body.title,
            description: req.body.description || ""
        });

        await task.save();

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: "Error creating task"
        });

    }

});


// GET ALL TASKS
router.get("/", auth, async (req, res) => {

    try {

        const tasks = await Task.find({
            userId: req.user.id
        }).sort({ createdAt: -1 });

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching tasks"
        });

    }

});


// UPDATE TASK
router.put("/:id", auth, async (req, res) => {

    try {

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description
            },
            {
                new: true
            }
        );

        res.json(updatedTask);

    } catch (error) {

        res.status(500).json({
            message: "Error updating task"
        });

    }

});


// DELETE TASK
router.delete("/:id", auth, async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting task"
        });

    }

});


module.exports = router;
