import { Park } from "../types/park";

interface ParkSelectorProps {
    parks: Park[],
    selectedPark: Park | undefined,
    setSelectedPark: (parkId: number) => void
}

export default function ParkSelector({ parks, selectedPark, setSelectedPark }: ParkSelectorProps) {
    return (
        <select value={selectedPark?.id} onChange={e => setSelectedPark(Number(e.target.value))} defaultValue={-1}>
            <option value={-1} disabled>Select a park</option>
            {parks.map(park =>
                <option key={park.id} value={park.id}>{park.name}</option>
            )}
        </select>
    );
}
