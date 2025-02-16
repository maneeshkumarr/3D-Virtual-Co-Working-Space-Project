import express from "express";
import { getWorkspaces, createWorkspace } from "../controllers/workspaceController";

const router = express.Router();

router.get("/", getWorkspaces);
router.post("/", createWorkspace);

export default router;
