const express=require('express');
const http=require('http');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');

const app=express();

const connectDB=require('./server/database/connection')

const PORT = process.env.PORT || 3000;
dotenv.config({ path: 'config.env' });
app.use(morgan('tiny'));
app.use(express.json());

connectDB();
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
