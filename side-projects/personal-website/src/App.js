import React from "react";

const { useState, useEffect, useRef } = React;
const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
const utm = "?utm_source=scrimba_degree&utm_medium=referral";
var API_KEY = "NpRvp4rxQt7jYkbu95fWvCMrZKxyQKlWcNZfzeopGfI";

const loadData = (options) => {
  fetch(options.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (options.onSuccess) options.onSuccess(data);
    });
};

const App = (props) => {
  let [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  // CHALLENGE:
  // Change the query to one of your interests
  let [query, setQuery] = useState("puppies");
  const [queryInput, setQueryInput] = useState("");

  const numberOfPhotos = 20;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;

    loadData({
      url: photosUrl,
      onSuccess: (res) => {
        setPhotos(res);
      },
    });
  }, [query, url]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(queryInput);
  };

  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s Website</h1>
      <div classname="flex">
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="Search Images"
            className="search"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button className="search-btn" type="submit">
            Change Theme
          </button>
        </form>
      </div>
      <div className="grid">
        {query
          ? photos.map((photo) => {
              return (
                <div key={photo.id} className="item">
                  <img className="img" src={photo.urls.regular} />
                  <div className="caption">
                    <span className="credits">
                      Photo by
                      <a href={photo.user.links.html + utm}>
                        {" "}
                        {photo.user.name}
                      </a>
                      <span> on </span>
                      <a href={"https://unsplash.com" + utm}>Unsplash</a>
                    </span>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default App;
