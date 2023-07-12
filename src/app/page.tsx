"use client";

import addData from "@/firebase/addData";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const init = async () => {
      const searchTerms = [
        "factory%20functions",
        "data%20structures",
        "array%20functions%20javascript",
        "composition%20over%20inheritance",
        "lambda%20functions",
        "streams%20java",
        "higher%20order%functions%javascript",
        "functional%20programming",
        "c++%20lambda%20functions",
        "sorting%20algorithms",
      ];
      const getSearchTerm = () =>
        searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))];
      const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_KEY;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    };
    init();
  }, []);

  return (
    <div>
      <button
        onClick={async () => {
          await addData("test", "test", {
            test: "test",
          });
        }}
      >
        TestButton
      </button>
    </div>
  );
};

export default Home;
