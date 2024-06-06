import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import indexRoutes from './app/routes/routes'
import path from 'path'
import dotenv from "dotenv";
// import { environment } from "./environments/environment";

dotenv.config();

const port = process.env.port || 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.all('/*', function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'POST, GET, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
});

if (process.env.NODE_ENV == 'production') {
  app.use('/', express.static(path.join(__dirname, 'public')));
}

// main routes
app.use('/api/', indexRoutes);
app.get('/api', (req: any, res: any) => {
  res.json({ message: 'Welcome to Auth backend!' });
});
app.use(express.static(path.join(__dirname, 'assets')));

if (process.env.NODE_ENV == 'production') {
  app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(process.cwd() + '/public/index.html');
  });
}
mongoose
  .connect(
    `mongodb+srv://devang:devang1234@cluster0.fjpd0.mongodb.net/Auth-reduxtoolkit?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB Connected");

        const server = app.listen(port, async () => {
          console.log("listening on", port);
        });
        server.on("error", console.error);
  });
//   .catch((error) => console.log(error));



