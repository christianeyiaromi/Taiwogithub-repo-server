import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components /Header";
import Home from "./components /Home";
import Repositories from "./components /Repositories";
import { Route, Routes } from "react-router-dom";
import AppOutLet from "./components /AppOutlet";
// import RepositoriesDetails from "./components /repositoriesDetails";

function App() {
  // const [repos, setRepos] = useState([]);
  // function fetchData() {
  //   return fetch(
  //     `https://api.github.com/users/christianeyiaromi/repos?per_page=2`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRepos(data);
  //       if (data === 0) {
  //         setRepos(0);
  //       }
  //     });
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Repositories" element={<Repositories />} />

        {/* <Route path="/RepositoriesDetails" element={<AppOutLet />}>
          <Route
            path="/RepositoriesDetails/:repoName"
            element={<RepositoriesDetails />}
          />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
