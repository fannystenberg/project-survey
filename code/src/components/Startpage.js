import React from 'react';

const Startpage = ({ startCount }) => {
  return (
    <div lang="us" className="startpage">
      <h1>Keep Stockholm green</h1>
      <p className="intro">
        This survey is brought to you by Company X
        and by answering this you are helping us keep Stockholm green.
      </p>
      <p className="intro">Click the button below to start.</p>
      <button aria-label="Start survey" type="button" onClick={startCount}><span aria-hidden="true">Start 👉</span></button>
    </div>
  )
};

export default Startpage;