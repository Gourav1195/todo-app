import mongoose   from "mongoose";
//DB Part
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
});

const taskSchema1 = mongoose.model("Task", taskSchema);

export default taskSchema1;