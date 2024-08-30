import axios from 'axios';
import { useQuery } from "react-query";
import { Land, Park, Ride } from '../types/park';
import QueueTimeList from './QueueTimeList';

interface FetchQueueTimeResponse {
    lands: Land[],
    rides: Ride[]
};

interface ParkQueueTimesProps {
    park: Park | undefined
};

async function fetchQueueTimes(parkId: number | undefined) {
    if (parkId !== undefined) {
        const response = await axios.get<FetchQueueTimeResponse>(`http://localhost:8000/park/${parkId}`);
        const data = response.data;
        return data;
    }
}

export default function ParkQueueTimes({ park }: ParkQueueTimesProps) {
    const { isLoading, error, data } = useQuery({
        queryKey: ['getQueueTimes', park?.id],
        queryFn: async () => await fetchQueueTimes(park?.id)
    });

    if (isLoading) return <div>Loading...</div>

    if (park === undefined) return <div>Choose a park to begin.</div>

    if (error || data === undefined) return <div>An error has occurred.</div>

    return (
        <div>
            <h2>{park.name}</h2>
            {data.lands.map(land =>
                <div key={land.id}>
                    <h3>{land.name}</h3>
                    <QueueTimeList rides={land.rides} />
                </div>
            )}
            <div>
                <h3>Rides without a land</h3>
                <QueueTimeList rides={data.rides} />
            </div>
        </div>
    );
}
