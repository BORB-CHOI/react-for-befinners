import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h4>{year}</h4>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Movie;
