import { MapMarker } from "../types/map";
import { Park } from "../types/park";
import MapChart from "./MapChart";

export default function ParksWorldMap({ parks, onSelectPark }: { parks: Park[], onSelectPark: any }) {
    const markers: MapMarker[] = parks.map(park => ({
        id: park.id,
        name: park.name,
        coordinates: [Number(park.longitude), Number(park.latitude)]
    }));

    return (
        <div style={{ "maxWidth": "1000px" }}>
            <MapChart markers={markers} onClickMarker={onSelectPark} />
        </div>
    )
}
