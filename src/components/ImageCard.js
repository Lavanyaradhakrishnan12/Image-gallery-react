import React from "react";

function ImageCard({ image }) {

  const  tags = image.tags.split(',');
  console.log(tags);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL || "https://via.placeholder.com/150"}
        alt={image.tags || "Image"} className="w-full" />
  
        <div className="px-6 py-4">
          <div className="font-bold text-slate-600 text-xl  mb-2" >
            Photo By {image.user}
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              {image.views}
              
            </li>
            <li>
              <strong>Downloads:</strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes:</strong>
              {image.likes}
            </li>
          </ul>
  
        </div>
        <div className="px-6 py-4">
          {tags.map((tag,index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">
            #{tag}
          </span>

          ))}
        
        </div>
       
      </div>

    );
}


export default ImageCard;