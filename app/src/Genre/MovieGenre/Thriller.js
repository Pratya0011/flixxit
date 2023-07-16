import React, { useEffect } from "react";
import Nav from "../../Components/Nav";
import Movienav from "../../Components/Movienav";
import { template } from "../Utils";
import { useSelector, useDispatch } from "react-redux";
import { fetchThriller } from "../../features/MovieSlice";
import '../../Style/Content.css'

function Thriller() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.thriller);
  const img_base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    dispatch(fetchThriller());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <Movienav />
      <>{template("thriller", movie.result, "movie", img_base_url)}</>
    </div>
  );
}

export default Thriller;
