import express from "express";
import bodyParser from 'body-parser' ;
// import userRoutes from './routes/users.js';
import mongoose from 'mongoose'
import routes from "./routes/TaskRoute.js";

const app = express();
const PORT = 5003;

app.use("/api",routes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://user:pass1234@crud-app.93zimyd.mongodb.net/')
.then(() => console.log('Mongodb server connected'))
.catch((err) => console.log(err));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//


app.use(bodyParser.json());
// app.use('/users',userRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));



app.listen(PORT, ()=> console.log(`Server running on Port: http://localhost:${PORT}`)) //app listen for incomming request