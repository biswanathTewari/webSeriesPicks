import React, { useState } from "react";
import "./styles.css";

var sitcom = [
  "The Office",
  "Friends ",
  "Big Bang Theory",
  "Brooklyn 99",
  "How i meet your mother"
];

var drama = ["Breaking bad", "Got ", "The good doctor", "Better call saul"];

var documentary = ["inside bills brain", "Bad Boys Billionaries"];

var ratings = {
  "The Office": "5/5",
  "Friends ": "4.5/5",
  "Big Bang Theory": "4/5",
  "Brooklyn 99": "3.5/5",
  "How i meet your mother": "3.5/5",
  "Breaking bad": "5/5",
  "Got ": "4.5/5",
  "The good doctor": "4/5",
  "Better call saul": "3.5/5",
  "inside bills brain": "4/5",
  "Bad Boys Billionaries": "3.5/5"
};

export default function App() {
  const [genre, Setgenre] = useState(["Select a genre to get started !"]);

  var onClickHandler = function (input) {
    if (input === "sitcom") Setgenre(sitcom);
    else if (input === "drama") Setgenre(drama);
    else Setgenre(documentary);
  };

  return (
    <div className="App">
      <h1>
        {" "}
        <span></span> 📺 tv/web series
      </h1>
      <p>Checkout bizan's favourite series.</p>
      <button onClick={() => onClickHandler("sitcom")}>sitcom</button>
      <button onClick={() => onClickHandler("drama")}>drama</button>
      <button onClick={() => onClickHandler("documentary")}>documentary</button>

      <hr />

      {
        //js portion
        genre.map((cur) => (
          <div className="items">
            <p>
              <em>{cur}</em> <br />
              <i>rating: {ratings[cur]}</i>
            </p>
          </div>
        ))
      }
    </div>
  );
}
