import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import img from "./routes/image.js";
import bodyParser from "express";
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(router);
app.use(img);
app.use(express.static("public"));
app.use(bodyParser.text({type: '/'}));
 
app.listen(5000, ()=> console.log('Server running at port 5000'));

