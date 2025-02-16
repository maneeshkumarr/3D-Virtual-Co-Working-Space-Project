import { Request, Response } from "express";

// Dummy data (replace with MongoDB queries later)
let workspaces = [
  { id: 1, name: "Tech Hub", members: 20 },
  { id: 2, name: "Design Lab", members: 15 },
];

// GET Workspaces
export const getWorkspaces = (req: Request, res: Response) => {
  res.json(workspaces);
};

// POST Create Workspace
export const createWorkspace = (req: Request, res: Response) => {
  const { name, members } = req.body;
  const newWorkspace = { id: workspaces.length + 1, name, members };
  workspaces.push(newWorkspace);
  res.status(201).json(newWorkspace);
};
