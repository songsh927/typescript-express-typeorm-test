import express , {Express, Request, Response} from 'express';
// import { DataSource } from 'typeorm';
import { createConnection } from 'typeorm';

// Router
import mainRouter from './route/index';

// const dbConnection = new DataSource({
//     type: "",
//     host: "",
//     port: ,
//     username:"",
//     password:"",
//     database:"",
//     entities:[
//         __dirname + `/**/*.entity{.ts,.js}`
//     ]
// })
// createConnection((connection)=> {
//     console.log("연결이 됬습니다.")
//   }).catch((error) => {
//     console.log(error)
//   })

const app: Express = express();

app.use(express.json());

app.use(mainRouter);

const server = app.listen(8080);
