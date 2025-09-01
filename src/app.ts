// import express, { Application, Request, Response } from "express";
// import cors from "cors";
// import { LostItemRoutes } from "./app/modules/LostAndFound/Lost.route";
// // import { StudentRoutes } from "./app/modules/student/student.route";
// const app: Application = express();


// //parser
// app.use(express.json());
// app.use(cors());

// // application routes
// app.use('/api/v1/lost', LostItemRoutes);


// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   // Send as JSON data
//   res.json({ number: a });
  
//   // OR if you want to send just the number as text
//   // res.send(a.toString());
  
//   // OR if you actually want to send a status code
//   // res.sendStatus(200); // But this won't send your '10' value
// };

// app.get('/', getAController);


// // app.get("/", (req: Request, res: Response) => {
// //   res.send("Hello World!");
// // });

// export default app;


import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ItemRoutes } from "./app/modules/LostAndFound/Lost.route";
 
// Uncomment if you need StudentRoutes
// import { StudentRoutes } from "./app/modules/student/student.route";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/lost', ItemRoutes);
// Uncomment if you need StudentRoutes
// app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  // Proper response with the number as data
  res.status(200).json({
    success: true,
    data: a
  });
};

app.get('/', getAController);

export default app;