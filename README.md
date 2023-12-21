# Description of TileGame_Frontend Project
Crafted an interactive 10x10 tile animation game using Node.js for the backend and React.js for the frontend. The dynamic frontend seamlessly communicates with the backend, ensuring real-time updates and an engaging user experience. Players navigate a visually captivating grid, enhancing the overall enjoyment of the game.

**Note:** While running this application through the provided link, please be aware that there might be a delay as the frontend makes requests to the backend. Kindly be patient and allow sufficient time for the interaction between the frontend and backend to complete. Your understanding is appreciated.

## Project Description
![image](https://github.com/shiv-1203/TileGame_Frontend/assets/105982373/34ebe010-1cfe-4f3e-8b20-10cb5ec017bf)

This repository comprises a web application with a React.js frontend and a Node.js backend. The final output window is visually represented in the provided image. The 10x10 grid shown in the image is dynamically served from the backend, accessible at [TileGame_Backend](https://tilegame-backend.onrender.com/). The following features are implemented:

### Game Overview
- Replicated a 10x10 tile animation as an interactive game with 10x10 square tiles.
- Added a start and stop button for user control.

### Game Features
- **Start and Stop Button:**
  - Initiates and halts the game, providing user control.
  - Resets the score to zero when the game is started.
  - Resets the score to zero when the game is stopped.

- **Speed Control:**
  - Implemented an option to control the speed of the animation.
  - Speed ranges from 1 to 5, corresponding to intervals of 250ms to 50ms.

- **Score System:**
  - Displayed a score counter.
  - +10 points awarded for clicking on a blue tile.
  - -10 points deducted for clicking on a red tile.

- **Tile Interaction:**
  - Tiles blink three times quickly when clicked, providing visual feedback.

### Instructions
- Initially, users can see the instructions or the notepad while opening the [TileGame](https://shiv-1203.github.io/TileGame_Frontend/).
- Users should follow the instructions mentioned in the "Instructions" tab before interacting with the game.
- One should wait for sometime after clicking the start button as the backend server takes time to implement.

### How to Run
1. Click or open [TileGame](https://shiv-1203.github.io/TileGame_Frontend/) in a web browser.
2. Follow the instructions presented in the "Instructions" tab.
3. Use the start and stop button to control the game.
4. Adjust the speed slider for different animation speeds.

Enjoy the game!

## Prerequisites
Before you begin, ensure you have the following prerequisites:

- **npm:** The Node.js package manager.

To install or update npm to the latest version, run the following command:

```bash
npm install npm@latest -g
```

## Initial Setup
To initialize a React app named "tilegame" using Create React App, run the following command:

```bash
npx create-react-app tilegame
```
 You can clone this repository for your own use [https://github.com/shiv-1203/TileGame_Frontend.git](https://github.com/shiv-1203/TileGame_Frontend.git)

## Required Module Installation
Install the following modules to ensure proper functionality:

```bash
npm install axios react-dom react-router-dom
```
```bash
npm install gh-pages --save-dev
```

These commands will download and install the necessary dependencies for your React application. Make sure to run them in the root directory of your **"tilegame"** project.

## Dynamic Color Columns Generation

This web-based game features a grid with the initial two columns always in green. The subsequent columns alternate between blue and black, generated dynamically using random functions. A distinctive red bar, spanning two columns, adds a challenging element, creating an engaging and visually dynamic gaming experience.
