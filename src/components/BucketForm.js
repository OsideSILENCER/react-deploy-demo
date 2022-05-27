import React, { useState } from 'react';

// package to create unique ids
import { nanoid } from 'nanoid';

// TODO: Use this object for eagerness levels in the BucketForm component below.
const eagernessLevels = Object.freeze({
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low"
});

function BucketForm(props) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = eagernessLevels.LOW;
    }

    props.onSubmit({
      id: nanoid(),
      text: input,
      eagerness: eagerness,
      isComplete: false,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Update the onClick handlers to set the corresponding eagerness level from the `eagernessLevels` object */}
            <p onClick={() => {}}>Must do</p>
            <p onClick={() => {}}>Want to do</p>
            <p onClick={() => {}}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  );
}

export default BucketForm;
