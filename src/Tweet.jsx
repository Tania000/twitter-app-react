import React, { useState } from "react";
import TweetInteractions from "./TweetInteractions.jsx";



//! Tweet Component

function Tweet({ tweet }) {
  const [likes, setLikes] = useState(0);

  //handleLike function:
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li className="tweet">
      <p className="tweet-content">{tweet.content}</p>
        <div className="tweet-details">
          <span className="tweet-author">{tweet.author}</span>
          <span className="tweet-date">{tweet.date.toString()}</span>
        </div>
      <TweetInteractions likes={likes} onLike={handleLike} />
    </li>
  );
};

export default Tweet;
