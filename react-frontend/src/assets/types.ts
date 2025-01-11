export type user = {
  authenticated: boolean;
  id: number;
};

export type roomBooking = {
  id: number;
  startTime: string;
  endTime: string;
  bookingDescription: string;
};

export type room = {
  id: number;
  roomNumber: number;
  floor: number;
  screens: number;
  capacity: number;
  smartBoards: number;
  bookings: roomBooking[];
};

export type booking = {
  id: number;
  floor: number;
  roomNumber: number;
  bookingDate: string;
  startTime: string;
  endTime: string;
  bookingDescription: string;
};

export type floorplanRoom = {
  id: number | null;
  floor: number;
  desc: string;
  short: string;
  bookable: boolean;
  availability: string;
  gridCord: {
      rowStart: number;
      columnStart: number;
      rowEnd: number;
      columnEnd: number;
  };
}
