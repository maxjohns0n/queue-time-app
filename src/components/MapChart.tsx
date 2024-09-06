import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { MapMarker } from "../types/map";
import "./MapChart.css";

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export function useStaticMapMarkerSize(
    markerRadius: number,
    initialMapScaleFactor: number = 1
): [number, (scaleFactor: number) => void] {
    const [scaleFactor, setScaleFactor] = useState<number>(initialMapScaleFactor)
    const scaledRadius = markerRadius / (scaleFactor - initialMapScaleFactor + 1)

    return [scaledRadius, setScaleFactor]
}

const MapChart = ({ markers, onClickMarker }: { markers: MapMarker[], onClickMarker: any }) => {
    const initialScaleFactor = 1.0;
    const [scaledMarkerRadius, setScaleFactor] = useStaticMapMarkerSize(5, initialScaleFactor);

    return (
        <ComposableMap>
            <ZoomableGroup
                center={[0, 0]}
                minZoom={1}
                maxZoom={200}
                zoom={1}
                onMove={({ zoom }: { zoom: number }): void => setScaleFactor(zoom)}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                                strokeWidth={0.5}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ id, name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates} onClick={() => onClickMarker(id)}>
                        <circle r={scaledMarkerRadius} fill="#F00" />
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;
