interface Ride {
    id: number,
    name: string,
    is_open: boolean,
    wait_time: number,
    last_updated: Date
};

interface Land {
    id: number,
    name: string,
    rides: Ride[]
}

interface Park {
    id: number,
    name: string,
    country: string,
    continent: string,
    latitude: string,
    longitude: string,
    timezone: string
}

interface Group {
    id: number,
    name: string,
    parks: Park[]
}

export type { Group, Land, Park, Ride }
