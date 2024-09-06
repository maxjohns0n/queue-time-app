import { render, screen } from '@testing-library/react';
import { QueueTimeList } from '../src/components/QueueTimeList';

const rides = [
  {
    id: 1,
    name: "Ride1",
    is_open: true,
    wait_time: 10,
    last_updated: Date.now()
  },
  {
    id: 2,
    name: "Ride2",
    is_open: true,
    wait_time: 0,
    last_updated: Date.now()
  },
  {
    id: 1,
    name: "Ride3",
    is_open: false,
    wait_time: 0,
    last_updated: Date.now()
  }
];

it('QueueTimeList renders rides in a list', () => {
  render(<QueueTimeList rides={rides} />);

  expect(screen.getByText("Ride1: 10")).toBeInTheDocument();

});
