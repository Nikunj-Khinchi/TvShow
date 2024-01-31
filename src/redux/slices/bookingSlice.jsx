// slices/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter((booking) => booking.id !== action.payload.id);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
// export const selectBookings = (state) => state.booking.bookings;

export default bookingSlice.reducer;
