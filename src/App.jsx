import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Link, useRoutes } from "react-router-dom";

// import supabase from "./client.js";

import { ShowCreators } from "./pages/ShowCreators";
import { EditCreator } from "./pages/EditCreator";
import { ViewCreator } from "./pages/ViewCreator";
import { AddCreator } from "./pages/AddCreator";

import { ContentCreatorCard } from "./components/ContentCreatorCard";

import "./App.css";

function App() {
  const creatorData = useMemo(
    () => [
      {
        name: "Ammmar Creator",
        url: "https://example.com",
        description: "This is Ammar's creator description.",
        imageURL: "https://example.com/ammar.jpg",
      },
      {
        name: "Beatrice Creator",
        url: "https://example.com",
        description: "This is Beatrice's creator description.",
        imageURL: "https://example.com/beatrice.jpg",
      },
      {
        name: "Carlos Creator",
        url: "https://example.com",
        description: "This is Carlos's creator description.",
        imageURL: "https://example.com/carlos.jpg",
      },
      {
        name: "Dennis Creator",
        url: "https://example.com",
        description: "This is Dennis's creator description.",
        imageURL: "https://example.com/dennis.jpg",
      },
    ],
    []
  );

  const [contentCreators, setContentCreators] = useState(creatorData);

  const routeElements = useRoutes([
    {
      path: "/",
      element: <ShowCreators contentCreators={contentCreators} />,
    },
    { path: "/add", element: <AddCreator /> },
    { path: "creator/:id/edit", element: <EditCreator /> },
    { path: "creator/:id", element: <ViewCreator /> },
  ]);

  useEffect(() => {
    // // This is where you would fetch data from your API or database
    // const getAllContentCreators = async() => {
    //   let response = await fetch("https://api.example.com/content-creators");
    //   setContentCreators(creatorData);
    // };

    // getAllContentCreators();
    setContentCreators(creatorData);
    console.log("Content creators loaded:", creatorData);
  }, [creatorData]);

  return (
    <div className="App">
      <header>
        <h1>CREATORVERSE</h1>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <Link to="/" className="button-link">
                  Show Creators
                </Link>
              </li>
              <li>
                <Link to="/add" className="button-link">
                  Add Creator
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">{routeElements}</div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
