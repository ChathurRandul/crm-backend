import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crm_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express server runnning on port ${PORT}`)
});

app.listen(PORT, () =>
    console.log(`Your server is runnning on port ${PORT}`)
);