# Vue3 Dockerized Node.js App

This project is a Dockerized application consisting of a Vue.js frontend, a Node.js API server, and a WebSocket server. It is designed for easy development and deployment using Docker Compose.

/project-root
├── docker-compose.yml
├── frontend │ ├── Dockerfile │ └── ...
├── api-server │ ├── Dockerfile │ └── ...
├── websocket-server │ ├── Dockerfile │ ├── .gitignore │ └── ...
└── README.md

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vue3-dockerized-nodejs-app.git
   cd vue3-dockerized-nodejs-app
   ```
2. Build and run the application:
   docker-compose up --build

3. Services
   Frontend: Vue.js application running on port 5173.
   API Server: Node.js server running on port 3000.
   WebSocket Server: WebSocket service running on port 8080.

## Development

Make sure to install any necessary dependencies for each service.
You can access your Vue app at http://localhost:5173, your API at http://localhost:3000, and your WebSocket server at ws://localhost:8080.

## Author

👤 **Belgacem DHIFLAOUI**

## License

This project is licensed under the MIT License.
