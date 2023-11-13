
# Task Management API

The Task Management API is a powerful and flexible task management system built with NestJS. It provides an intuitive interface for users to create and manage their tasks efficiently. The API ensures data privacy by restricting access to only the user's own tasks.

## Features

- User authentication: Secure user authentication system using JWT tokens.
- Task CRUD operations: Create, read, update, and delete tasks.
- Task ownership: Users can only access and manage their own tasks.
- Task filtering and sorting: Filter and sort tasks based on various criteria.
- Pagination: Retrieve tasks in paginated form for better performance.
- Error handling: Comprehensive error handling and appropriate response codes.
- API documentation: Interactive API documentation using Swagger.

## Installation

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Install dependencies: `npm  install or yarn add `
3. Set up environment variables: Rename `.env.example` to `.env` and provide the necessary configuration.
4. Start the server: `npm  run or yarn start:dev`
5. The API will be accessible at `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /auth/signup` - User registration.
- `POST /auth/login` - User login.

### Tasks

- `GET /tasks` - Get all tasks for the authenticated user.
- `GET /tasks/:id` - Get a specific task by ID.
- `POST /tasks` - Create a new task.
- `PUT /tasks/:id` - Update a specific task by ID.
- `DELETE /tasks/:id` - Delete a specific task by ID.

For detailed API documentation, visit `http://localhost:3000/api-docs` after starting the server.

## Technologies Used

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- PostgreSQL: A powerful, open-source relational database system.
- TypeORM: An ORM library for TypeScript and JavaScript that simplifies database management.
- Swagger: A tool for designing, building, and documenting RESTful APIs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify it as per your requirements.

## Acknowledgements

Special thanks to the NestJS community and contributors for their fantastic work and support.

## Contact

For any inquiries or questions, please contact [your-email@example.com](mailto:your-email@example.com).

Happy task managing!