Multiplayer Unicode Grid Game

Description:
This is a multiplayer web application where users can select and update a block in a shared 10x10 grid with Unicode characters. The grid is updated in real-time for all connected players, and users can see how many players are currently online. Once a player submits a character, they cannot update any block again.

Goals:
Build a collaborative real-time grid application.
Allow real-time interaction between multiple players.
Ensure smooth player experience with no conflicts in updates.

Tech Stack:
Frontend: ReactJS, Socket.IO, Typescript
Backend: NodeJS, Express, Socket.IO, Typescript

Features:
Real-time updates to the shared grid.
Player count visibility.
Optional timed restriction and historical updates.

Setup and Installation:
Backend:
Navigate to /server and install dependencies with npm install.
Run the backend server using npx tsc and node dist/index.js.

Frontend:
Navigate to /client and install dependencies with npm install.
Start the React frontend with npm start.

Running the Application:
Ensure both frontend and backend are running.
Open your browser at http://localhost:3000 to interact with the grid in real-time.
