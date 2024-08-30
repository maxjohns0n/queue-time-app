import axios from 'axios';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
    console.log("Server Listening on port 8000");
});

type ParkIdRequest = Request<{ parkId: number }>;

async function fetchFromApi(endpoint: string) {
    try {
        const response = await axios.get(`https://queue-times.com/${endpoint}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(`Error fetching from API: ${error}`);
    }
}

app.get("/parks", async (request: Request, response: Response) => {
    response.send(await fetchFromApi(`parks.json`));
});

app.get("/park/:parkId", async (request: ParkIdRequest, response: Response) => {
    response.send(await fetchFromApi(`parks/${request.params.parkId}/queue_times.json`));
});
