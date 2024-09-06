import { Land } from "../types/park";
import QueueTimeList from "./QueueTimeList";

export default function LandQueueTimes({ land }: { land: Land }) {
    return (
        <div key={land.id}>
            <h3>{land.name}</h3>
            <QueueTimeList rides={land.rides} />
        </div>
    );
}
