import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './App.css';
import Notepad from './Component/Notepad';

const App = () => {
    const [grid, setGrid] = useState([]);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(3);
    const [tempStartStop,setTempStartStop] =useState(false);
    const intervalRef = useRef(null);
    var moveRed = 0;
    var flag =true;

    const fetchGrid = async () => {
        try {
            const response = await axios.get(`https://tilegame-backend.onrender.com/api/grid`, {
              params: {
                param1: moveRed,
                param2:flag,
              },
            });
            if(flag===true){
              moveRed=moveRed+1;
            }
            else{
              moveRed=moveRed-1;
            }
            if(moveRed%9===8 || (moveRed%9===2 && flag===false)){
              flag=!flag;
            }
            setGrid(response.data.grid);
        } catch (error) {
            console.error('Error fetching grid data:', error);
        }
    };

    const handleClick = (row, col) => {
      if(tempStartStop===true){
        if (grid[row][col] === 'blue') {
            // Clicked on a blue tile, increase score
            setScore((prevScore) => prevScore + 10);
            blinkTile(row, col);
        } else if (grid[row][col] === 'red') {
            // Clicked on a red tile, decrease score
            setScore((prevScore) => prevScore - 10);
            blinkTile(row, col);
        }
      } 
    };

    const blinkTile = (row, col) => {
        // Logic to quickly blink the tile
        const updatedGrid = [...grid];
        updatedGrid[row][col] = 'blink';
        setGrid(updatedGrid);
        setTimeout(() => {
            updatedGrid[row][col] = grid[row][col];
            setGrid(updatedGrid);
        }, 300);
    };

    const handleStart = () => {
        setScore(0);
        fetchGrid();
        setTempStartStop(true);
        if (tempStartStop) {
          intervalRef.current = setInterval(fetchGrid, 1000 / speed);
        }
    };

    const handleStop = () => {
        setScore(0);
        setTempStartStop(false);
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
      // Update interval speed when the speed changes
      clearInterval(intervalRef.current);
      if (tempStartStop) {
          intervalRef.current = setInterval(fetchGrid, 1000 / speed);
      }
  }, [speed, tempStartStop]);

    return (
        <div className="game-container">
          <div className="controls">
              <span className="speed">
                <label >Speed: </label>
                <input
                    type="range"
                    min="1"
                    max="6"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                />
                </span>
                <button className="startStop" onClick={handleStart}>Start</button>
                <button className="startStop" onClick={handleStop}>Stop</button>
                
                
                <div className='score'>Score: {score}</div>
            </div>
            <div className="grid-container">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`grid-cell ${cell}`}
                                onClick={() => handleClick(rowIndex, colIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <Notepad/>
        </div>
    );
};

export default App;
