import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query")?.toLowerCase();


  const searchOptions = [
    { name: "pictures", path: "/pictures" },
    { name: "kitchen", path: "/kitchen" },
    { name: "hall", path: "/hall" },
    { name: "entire building", path: "/entire" },
    { name: "faq", path: "/faq" },
    { name: "home", path: "/home" },
    { name: "henderson", path: "/home" },
    { name: "price", path: "/faq" },
    { name: "area", path: "/faq" },
    { name: "policies", path: "/faq" },
    { name: "reserve", path: "/entire" },
  ];

  
  const filteredResults = searchOptions.filter((option) =>
    option.name.includes(query)
  );


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((result, index) => (
            <li key={index}>
              <button onClick={() => handleNavigation(result.path)}>
                {result.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found. Please try a different search term.</p>
      )}
    </div>
  );
};
