const express = require("express");
const {getUserGoals, getGoalById} = require('../controller/todocontroller.js')

const todoRouter = express.Router();

todoRouter.get('/:userId/goals',getUserGoals);
todoRouter.get('/:userId/:goalId',getGoalById);

module.exports = todoRouter;