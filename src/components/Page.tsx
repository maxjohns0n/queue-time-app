import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Group, Park } from '../types/park';
import ParkQueueTimes from './ParkQueueTimes';
import ParkSelector from './ParkSelector';

async function fetchParks() {
    const response = await axios.get<Group[]>("http://localhost:8000/parks");
    const data = response.data;
    return data.flatMap(group => group.parks);
}

export default function Page() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['getParks'],
        queryFn: async () => await fetchParks()
    });

    const [selectedPark, setSelectedPark] = useState<Park | undefined>();

    function setSelectedParkById(parkId: number) {
        const park = data?.find(park => park.id === parkId);
        if (park !== undefined)
            setSelectedPark(park);
    }

    if (isLoading) return 'Loading...';
    if (error || data === undefined) return 'An error has occurred.';

    return (
        <>
            <ParkSelector parks={data} selectedPark={selectedPark} setSelectedPark={setSelectedParkById} />
            <ParkQueueTimes park={selectedPark} />
        </>
    )
}
