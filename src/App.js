import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

// import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setIsLoading(true); // Ensure loading state is updated when term changes
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        console.log("whrer",data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [term]); // Add `term` to the dependency array

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>
      {!isLoading && images.length === 0 &&  <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-4xl text-center  mt-32 font-bold">No Images Found...</p> }
      {isLoading ? (
        <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-4xl text-center  mt-32 font-bold">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-4 ">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
