import categoryData from "../../data/categoryData.json";
import React from "react";



const ArtGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categoryData.categories.map((category) => (
        <div key={category.id}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={category.image}
            alt={category.name}
          />
          <div>
            <h3>{category.name}</h3>
            <p>{category.headline}</p>
            <a href={category.link}>Learn More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
