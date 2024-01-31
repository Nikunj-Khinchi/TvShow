// Home.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Demo from '/image/DemoImage.jpg';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="mt-16 py-9 pb-20 px-8 sm:px-3 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shows.map((show) => (
          <div key={show.show.id}>
          <Link to={`/show/${show.show.id}`}>
          <div  className="flex flex-col items-center rounded-md p-3 border border-gray-300">
              <div>
                {show.show.image ? (
                  <img
                    src={show.show.image ? show.show.image.medium : Demo}
                    alt={show.show.name}
                    className="mb-2 rounded-md"
                  />
                ) : (
                  <img src={Demo} alt={show.show.name} className="mb-2 rounded-md" />
                )}
                <p className="text-blue-950 font-bold text-xl" style={{ fontStyle: 'revert' }}>
                  {show.show.name}
                </p>
                <p className="text-gray-600">Language: {show.show.language}</p>
                <p className="text-gray-600">Rating: {show.show.rating?.average || 'N/A'}</p>
                <p className="text-gray-600">
                  Genres: {show.show.genres && show.show.genres.join(', ')}
                </p>
              </div>
          </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
