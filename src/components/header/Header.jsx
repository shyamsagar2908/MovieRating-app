import React, {useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [Val, setVal] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const navigate = useNavigate();

  const fetchdata = async (searchString) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${searchString}&include_adult=false&language=en-US&page=1`
    );
    const data = await res.json();
    // console.log(data);
    navigate("/Searched", { state: { id: data } });
  };

  const searchHandler = (e) => {
    clearTimeout(timeoutId);
    setVal(e.target.value);
    const timeout = setTimeout(() => {
      fetchdata(e.target.value);
    }, 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/searched" style={{ textDecoration: "none" }}>
          <input
            type="text"
            className="input"
            placeholder="Search Here"
            value={Val}
            onChange={searchHandler}
          ></input>
        </Link>
      </div>
    </div>
  );
};

export default Header;
