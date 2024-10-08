import { Ride } from '../types/park';

export default function QueueTimeList({ rides }: { rides: Ride[] }) {
    return (
        <ul>
            {rides.map(ride =>
                <li key={ride.id}>
                    {ride.name}: {ride.is_open ? ride.wait_time : "Closed"}
                </li>
            )}
        </ul>
    )
}
