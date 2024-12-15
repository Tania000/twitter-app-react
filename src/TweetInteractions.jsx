import React from "react";
import { FaHeart, FaRetweet, FaReply } from "react-icons/fa";



//! TweetInteractions Component

function TweetInteractions ({ likes, onLike }) {

  return (
    <div className="tweet-interactions">
      <button onClick={onLike}>
        <FaHeart /> {likes}
      </button>

      <button>
        <FaRetweet />
      </button>

      <button>
        <FaReply />
      </button>
    </div>
  );
};

export default TweetInteractions;
