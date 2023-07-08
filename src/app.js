import express from "express";
import morgan from "morgan";
// Routes
import phonesRoutes from "./routes/phones.routes";

const app=express();

// Settings 
app.set("port", 5000);

// Middleware
app.use(morgan("dev"));
app.use(express.json())

 // Routes
 app.use("/api/phones", phonesRoutes);

export default app;
