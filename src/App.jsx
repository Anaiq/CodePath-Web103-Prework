import React from 'react'
// import supabase from './client.js';
import { useRoutes } from 'react-router-dom';
import { ShowCreators } from './pages/ShowCreators';
import { EditCreator } from './pages/EditCreator';
import { ViewCreator } from './pages/ViewCreator';
import { AddCreator } from './pages/AddCreator';

import { ContentCreatorCard } from './components/ContentCreatorCard';

import './App.css'


function App() {
  // const name = "Cara Creator";
  // const URL = "https://example.com";
  // const description = "This is a sample content creator.";
  // const imageURL = "https://google.com/";

  const routeElements = useRoutes([
    { path: "creators", element: <ShowCreators/>},
    { path: '/add', element: <AddCreator/> },
    { path: 'creator/:id/edit', element: <EditCreator /> },
    { path: 'creator/:id', element: <ViewCreator/> },
  ]);

  return (
    <>
      <div className="container">
        {routeElements}
      </div>
    </>
  )
}

export default App
