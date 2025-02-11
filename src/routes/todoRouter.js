const express = require("express");
const {getUserGoals, getGoalById, postGoalRecord} = require('../../controllers/todocontroller.js');

const todoRouter = express.Router();

todoRouter.get('/:userId/goals',getUserGoals);
todoRouter.get('/:userId/:goalId',getGoalById);
todoRouter.post('/goalrecord/:goalId',postGoalRecord);

module.exports = todoRouter;