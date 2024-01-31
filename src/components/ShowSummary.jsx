import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/slices/bookingSlice";
import check from '/image/check.png';
import Demo from '/image/DemoImage.jpg';


const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // New state for success popup
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching show data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleBookTicket = () => {
    // Dispatch the booking action with necessary details
    dispatch(
      addBooking({
        name: show.name,
        id: show.id,
        language: show.language,
        schedule: show.schedule,
        rating: show.rating?.average || "N/A",
        genres: show.genres && show.genres.join(', '),
        imageUrl: show.image && show.image.medium, // Include the image URL
      })
    );

    // Show the success popup
    setShowSuccessPopup(true);

    // Hide the success popup after 3 seconds (adjust the timeout as needed)
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
<>
    <div className="container mt-20 mx-auto p-8 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-4 font-serif">{show.name}</h1>
      <div className="flex flex-col md:flex-row mb-4 gap-2">
        {show.image ? (
          <img
            src={show.image && show.image.medium}
            alt={show.name}
            className="mr-4 rounded-md md:w-[30rem] md:h-[25rem] w-[25rem] h-[25rem]"
          />
        ) : (
          <img
            src={Demo}
            alt={show.name}
            className="mb-2 w-[30rem] rounded-md px-4"
          />
        )}
        <div className="text-gray-600 flex flex-col gap-3">
          <p className="">
            Language: {show.language} | Status: {show.status} | Average Rating:{" "}
            {show.rating?.average || "N/A"}
          </p>
          <p className="">Type: {show.type}</p>
          <p className="">Premiered: {show.premiered}</p>
          <p className="">
            Genres: {show.genres && show.genres.join(', ')}
          </p>
          <p className="">
            Schedule: {show.schedule && `Time: ${show.schedule.time} | Days: ${show.schedule.days.join(', ')}`}
          </p>
          <p className="">
            Summary :{" "}
            {show.summary && show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
          <div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleBookTicket}
            >
              Book a Movie Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white flex flex-col justify-center items-center p-8 rounded-md">
            <p className="text-lg font-bold mb-4">Booking Successful!</p>
            <img src={check} height={100} width={100} alt="" />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ShowSummary;
