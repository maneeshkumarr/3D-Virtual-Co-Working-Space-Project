import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Workspace", WorkspaceSchema);
