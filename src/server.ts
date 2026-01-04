import express from "express"
import { rootRouter } from "./routes/root"
import axios from "axios";

const app = express();

app.use(express.json())

app.use("/", rootRouter);

app.use((error, req, res, next) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const {data, status} = error.response;
            res.status(status).json(data)
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            res.status(503).json("Server timed out or could not respond")
        } else {
            // Something happened in setting up the request that triggered an Error
            res.status(500).json("Server error")
        }
    } else next(error);
})

export default app;