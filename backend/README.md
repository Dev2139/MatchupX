# Tournament Management System

This is the backend for the Tournament Management System, built with Node.js and Express. It provides APIs for managing tournaments, teams, players, and auctions.

## Installation

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file and add your MongoDB connection string and Auth0 credentials.
5. Start the server with `npm run dev`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/login`: Login a user.

- **Tournaments**
  - `GET /api/tournaments`: Get all tournaments.
  - `POST /api/tournaments`: Create a new tournament.
  - `PUT /api/tournaments/:id`: Update a tournament.
  - `DELETE /api/tournaments/:id`: Delete a tournament.

- **Players**
  - `GET /api/players`: Get all players.
  - `POST /api/players`: Add a new player.
  - `PUT /api/players/:id`: Update a player.

- **Umpires**
  - `GET /api/umpires`: Get all umpires.
  - `POST /api/umpires`: Add a new umpire.
  - `PUT /api/umpires/:id`: Update an umpire.

- **Viewers**
  - `GET /api/viewers`: Get all viewers.
  - `POST /api/viewers`: Add a new viewer.
  - `PUT /api/viewers/:id`: Update a viewer.

## License

This project is licensed under the MIT License.
