import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBooking } from "../redux/slices/bookingSlice";
import Demo from '/image/DemoImage.jpg';

const BookingPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleRemoveBooking = (booking) => {
    // Open the popup and store the selected booking
    setShowPopup(true);
    setSelectedBooking(booking);
  };

  const handleConfirmRemove = () => {
    // Dispatch the removeBooking action
    dispatch(removeBooking(selectedBooking));

    // Close the popup
    setShowPopup(false);
    setSelectedBooking(null);
  };

  const handleCancelRemove = () => {
    // Close the popup
    setShowPopup(false);
    setSelectedBooking(null);
  };

  return (
    <div className="container shadow-xl mt-20 pb-24 mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-4 font-serif">Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border p-4 rounded-md overflow-hidden flex items-center justify-center flex-col "
            >
            
             { booking.imageUrl ?  <img
                src={booking.imageUrl}
                alt={booking.language}
                className="w-[200px] mb-2"
              /> : <img
              src={Demo}
              alt=""
              className="mb-2 w-[30rem] rounded-md px-4"
            />}
              <p className="text-lg font-bold mb-2"> {booking.name}</p>
              <p className="">Language: {booking.language}</p>

              <p>{booking.schedule && `Time: ${booking.schedule.time}`}</p>
              <p>
                {booking.schedule && `Days: ${booking.schedule.days.join(", ")}`}
              </p>
              <p>Rating: {booking.rating}</p>
              <p>Genres: {booking.genres}</p>
              <button
                onClick={() => handleRemoveBooking(booking)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-600"
              >
                Remove Booking
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <p className="text-lg font-bold mb-4">Are you sure you want to remove this booking?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelRemove}
                className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRemove}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
