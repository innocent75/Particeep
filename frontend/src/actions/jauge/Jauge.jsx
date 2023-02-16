import React from "react";
import "./jauge.css";

function Jauge({ likes, dislikes }) {
  const totalVotes = likes + dislikes;
  const likePercentage = totalVotes === 0 ? 0 : (likes / totalVotes) * 100;
  const dislikePercentage =
    totalVotes === 0 ? 0 : (dislikes / totalVotes) * 100;
  return (
    <div className="gauge">
      <div
        className="gauge-bar"
        style={{
          width: `${likePercentage}%`,
          backgroundColor: "rgb(124, 191, 113)",
        }}
      />
      <div
        className="gauge-bar"
        style={{
          width: `${dislikePercentage}%`,
          backgroundColor: "rgb(183, 87, 87)",
        }}
      />
    </div>
  );
}

export default Jauge;
