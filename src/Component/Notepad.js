import React from 'react';
import '../Style/Notepad.css';

const Notepad = () => {
  return (
    <div className="notepad-container">
      <h2>Instructions</h2>
      <hr></hr>
      <ul>
        <li>
        Click on the <strong>Start</strong> Button to display the tile initially.
        </li>
        <li>
        Click on the <strong>Stop</strong> Button to stop the tile and reset the score.
        </li>
        <li>
        Change the range of the <strong>Speed</strong> Button to alter the animation speed.
        </li>
        <li>
            Displays a score (can be negative), <strong>+10</strong> for clicking on <strong>Blue Tile</strong>, and 
            <strong>-10</strong> for clicking on <strong>Red Tile</strong>. 
        </li>
      </ul>
        <strong>Note:</strong> A slight modification is done, instead of moving red 
        title only here the tile game moves both the red and the blue tile to increase the complexity of the game.
    </div>
  );
};

export default Notepad;
