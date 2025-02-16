import { Request, Response } from "express";

// Simulated database (Replace this with actual DB logic)
const users: { username: string; password: string }[] = [];

// REGISTER FUNCTION
export const register = (req: Request, res: Response) => {
  console.log("Register request received:", req.body); // Debugging log

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Check if user already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists!" });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully!" });
};

// LOGIN FUNCTION
export const login = (req: Request, res: Response) => {
  console.log("Login request received:", req.body); // Debugging log

  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  res.status(200).json({ message: "Login successful!", user });
};
