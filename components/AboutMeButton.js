import React from "react";

export default function AboutMeButton(props) {
  const { longStory, setLongStory } = props;
  return (
    <div>
      <button
        className={`${
          longStory ? "story-button-active" : null
        } short-story-long-button`}
        onClick={() => setLongStory(!longStory)}
      >
        Short story long
      </button>
      <button
        className={`${
          longStory ? null : "story-button-active"
        } long-story-short-button`}
        onClick={() => setLongStory(!longStory)}
      >
        Long story short
      </button>
    </div>
  );
}
