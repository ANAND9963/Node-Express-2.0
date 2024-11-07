# Node-Express-2.0

# Twitter Project

This project is a simple Twitter-like API built with Node.js and Express. It allows users to create, read, update, and delete posts (CRUD operations). Each post contains a title and content. 

## Project Structure

- **Express.js**: Framework for building the API.
- **Body-Parser**: Middleware for parsing JSON requests.
- **Routes**:
  - `GET /post`: Fetch all posts.
  - `GET /post/:id`: Fetch a single post by ID.
  - `POST /post`: Create a new post (with validation).
  - `PUT /post/:id`: Update an existing post by ID.
  - `DELETE /post/:id`: Delete a post by ID.

## Code Structure

The code consists of the following main sections:

- **Data Storage**: `posts` array, storing all posts with `title` and `content`.
- **Middleware**:
  - `validateData`: Validates `title` and `content` of the post before creating or updating it. Ensures title uniqueness.
- **Handlers**:
  - `getAllPosts`: Returns all posts.
  - `getPostById`: Returns a post by ID.
  - `createPost`: Adds a new post to the `posts` array.
  - `updatePost`: Edits an existing post by ID.
  - `deleteById`: Removes a post by ID.

## Usage

1. **Installation**

   Make sure you have [Node.js](https://nodejs.org/) installed.

   Clone the repository and navigate to the project folder:

   ```bash
   git clone <repository-url>
   cd twitter-project
