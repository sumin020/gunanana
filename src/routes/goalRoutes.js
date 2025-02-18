import express from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import { setGoal, friendGoal, updateGoal, deleteGoal } from "../controllers/goalController.js";

const goalRouter = express.Router();

// 목표 생성, id는 user id
goalRouter.post('/:id/setGoal', asyncHandler(setGoal));

// 또래 목표 조회, id는 user id
goalRouter.get('/:id/friendGoals', asyncHandler(friendGoal));

// 목표 수정, id는 goal_id
goalRouter.put('/:id/updateGoal', asyncHandler(updateGoal));

// 목표 삭제, id는 goal_id
goalRouter.delete('/:id/deleteGoal', asyncHandler(deleteGoal));


export default goalRouter;