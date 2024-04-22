import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Repositories = () => {
  const [user, setUser] = useState([]);

  const [currentReposition, setCurrentReposition] = useState(0);
  function fetchData() {
    return fetch(
      `https://api.github.com/users/christianeyiaromi/repos?per_page=2&page=${currentReposition}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        if (data === 0) {
          setCurrentReposition(0);
        }
      });
  }

  useEffect(() => {
    fetchData();
    console.log(user);
  }, [currentReposition]);

  function handleNext(e) {
    e.preventDefault();
    setCurrentReposition((prev) => prev + 1);
  }
  function handlePrevious(e) {
    e.preventDefault();
    setCurrentReposition((prev) => prev - 1);
  }
  const Repo = user.map((item) => {
    return (
      <div key={item.name} className="repo-container">
        <h1>{item.name}</h1>
        <p>{item.visibility}</p>
      </div>
    );
  });
  return (
    <div className="repo-page">
      <div className="repo-h1">
        <h1>Repository</h1>
      </div>
      <div className="main-repo">{Repo}</div>
      <div className="button">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default Repositories;
