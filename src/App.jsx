import React, { useState, useEffect, createContext } from "react";
import TweetInput from "./TweetInput";
import TweetList from "./TweetList";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Profile from "./Profile";


export const AppContext = createContext();

//! App Component
const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({
    name: "User",
    profilePicture: "user.jpg",
  });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
const fetchTweets = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/posts"); 
    if (!response.ok) {
      throw new Error("Failed to fetch tweets");
    }
    const data = await response.json();
    const formattedTweets = data.slice(0, 5).map((post) => ({
      content: post.title,
      author: `User ${post.userId}`,
      date: new Date().toLocaleString(),
    }));
    setTweets(formattedTweets);
  } catch (error) {
    console.error("Error fetching tweets:", error);
  }
};

fetchTweets();
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Sidebar />
        <main>
          <Header />
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
