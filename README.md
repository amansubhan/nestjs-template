[![Node.js CI](https://github.com/amansubhan/nestjs-template/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/amansubhan/nestjs-template/actions/workflows/node.js.yml)
[![Docker Image Create and Publish](https://github.com/amansubhan/nestjs-template/actions/workflows/docker-image.yml/badge.svg)](https://github.com/amansubhan/nestjs-template/actions/workflows/docker-image.yml)

# Project Overview

This project utilizes a combination of cutting-edge technologies to create a robust and scalable application. The
following technologies and techniques are used:

## Technologies

* **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
* **ExpressJS**: A popular web framework for building web applications.
* **TypeScript**: A superset of JavaScript used for building server-side applications.
* **Docker**: A containerization platform for building, shipping, and running applications.
* **Docker Compose**: A tool for defining and running multi-container Docker applications.
* **Valkey**: A high-performance data structure server that primarily serves key/value workloads. And a drop-in
  replacement for Redis.
* **NGINX**: A popular web server and reverse proxy server.

## Techniques

* **Containerization**: The project uses Docker to containerize the application, ensuring consistency and reliability
  across different environments.
* **Microservices Architecture**: The application is designed as a microservices architecture, with multiple services
  communicating with each other.
* **Caching**: Redis is used as a caching layer to improve application performance and reduce the load on the database.
* **Load Balancing**: NGINX is used as a reverse proxy server to distribute incoming traffic across multiple instances
  of the application.
* **Environment Variables**: Environment variables are used to configure the application and services, making it easy to
  switch between different environments.

## Docker Compose

The `docker-compose.yml` file defines the services and their configurations. The following services are defined:

* **app**: The NestJS application, built using the Dockerfile and exposed on port 3000.
* **cache**: The Redis caching service, used to store and retrieve data.
* **proxy**: The NGINX reverse proxy server, used to distribute incoming traffic and serve static files.

## Getting Started

To get started with the project, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/amansubhan/nestjs-template.git
```

### Navigate to the Project Directory

```bash
cd nestjs-template
```

### Build the Docker Images

```bash
docker-compose build
```

### Start the Services

```bash
docker-compose up
```

### Access the Application

```bash
http://localhost/api
```

## License

This project is licensed under the Apache License, Version 2.0. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please submit a pull request with your changes, and ensure that all tests pass before
submitting.

## Technologies Used

<img alt="NestJS" height="64" src="https://cdn.worldvectorlogo.com/logos/nestjs.svg" width="64"/>

<img alt="ExpressJS" height="64" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" width="64"/>

<img alt="Typescript" height="64" src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="64"/>

<img alt="Docker" height="64" src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" width="64"/>

<img alt="Valkey" height="64" src="https://www.gravatar.com/avatar/3aa60f862d151316d2b03121143fbee0" width="64"/>

<img alt="NGINX" height="64" src="https://cdn.worldvectorlogo.com/logos/nginx-1.svg" width="64"/>
