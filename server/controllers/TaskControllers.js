import TaskModel from "../models/taskmodels.js";

export const getTasks = async (req, res) =>{
    //check
    // res.send("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const tasks = await TaskModel.find();
    res.send(tasks);
}

export const saveTasks = (req, res) => {
    const {task} = req.body

    TaskModel.create({task})
    .then((data) => {
        console.log("Saved Successfully");
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!"})
    });
}

export const updateTask = (req, res) => {
    const {id} = req.params;
    const {task} = req.body;

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Update Successfully")).catch((err) => {
        res.send({ error: err, msg: "Something went wrong!"})  
    })
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "something went wrong"})
    })
}

export const deleteTask = (req, res) => {
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!"})  
    });
};

