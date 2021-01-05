<h1 align="center">API REST with Node.js, Express and MongoDB</h1>

<h3 align="center"> 
	Status: finished :heavy_check_mark:
</h3>

<p align="center">
<a href="https://github.com/cassiocappellari/node-express-mongodb-app/commits/main">
	<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/cassiocappellari/node-express-mongodb-app/main?color=black">
</a>
    
<img alt="License" src="https://img.shields.io/badge/license-MIT-black">

<a href="https://github.com/cassiocappellari/node-express-mongodb-app/stargazers">
	<img alt="Stargazers" src="https://img.shields.io/github/stars/cassiocappellari/node-express-mongodb-app?style=social">
</a>
</p>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=%20node-express-mongodb-app&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcassiocappellari%2Fnode-express-mongodb-app%2Fmain%2FInsomnia-All_2020-12-20)

## 📋 Index

- [About](#-about)
- [Routes](#-routes)
- [Technologies](#-technologies)
- [How To Use](#-how-to-use)
- [Author](#-author)
- [License](#-license)

## 🚀 About

This application was built from scratch using **JavaScript**, **Node.js**, **Express** and **MongoDB** with MVC software design patterns. In this API was created routes for user registration with encrypted password which authenticates users by returning a **JWT token** to validate the login, with a feature that provides **password recovery through Nodemailer**.

## 🗺️ Routes

**User Authentication:**

|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/auth/register`|POST|Request body with `name`, `email` and `password`|Register a user
|`/auth/authenticate`|POST|Request body with `email` and `password`|Authenticate a user
|`/auth/forgot_password`|POST|Request body with `email`|Sends a new access token to the email entered in the request body
|`/auth/reset_password`|POST|Request body with `email`, `token` and `password`|Reset the access password through the registered email and the access token provided by email on the `/forgot_password` route

**Requests**

- POST: `/auth/register`
```json
{
	"name": "Exemple",
	"email": "exemple@gmail.com",
	"password": "123456"
}
```

- POST: `/auth/authenticate`
```json
{
	"email": "exemple@gmail.com",
	"password": "12345678"
}
```

- POST: `/auth/forgot_password`
```json
{
	"email": "exemple@gmail.com"
}
```

- POST: `/auth/reset_password`
```json
{
	"email": "exemple@gmail.com",
	"token": "ebf60c2e5be235f96c0c0571c04fad1f843da9c7",
	"password": "1234567890"
}
```

**CRUD Projects:**

|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/projects`|GET| - |Lists the projects registered in the database
|`/projects/:projectId`|GET|Query parameter with `projectId`|Lists a specific project through it's id
|`/projects`|POST|Request body with `title`, `description` and `tasks`|Creates a new project
|`/projects/:projectId`|PUT|Query parameter with `projectId`|Updates a specific project through it's id
|`/projects/:projectId`|DELETE|Query parameter with `projectId`|Deletes a specific project through it's id

**Requests**

- GET: `/projects/5fd537a24c1f4316c1d21f2d`

- POST: `/projects`
```json
{
	"title": "New Project Test 2",
	"description": "Project description Test",
	"tasks": [
		{
			"title": "New task Test 2",
			"assignedTo": "5fd537a24c1f4316c1d21f2d"
		},
		{
			"title": "Another task Test 2",
			"assignedTo": "5fd537a24c1f4316c1d21f2d"
		}
	]
}
```

- PUT: `/projects/5fd537a24c1f4316c1d21f2d`

- DELETE: `/projects/5fd537a24c1f4316c1d21f2d`

## 🤖 Technologies

The project was developed using this technologies:

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

## ⚙ How to Use

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/node-express-mongodb-app.git

# Enter the project folder

$ cd node-express-mongodb-app

# Install the dependencies

$ npm install

# Start the project

$ node src/index.js

```

## 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)

## 📝 License

This project is under the [MIT](./LICENSE) license.

---

Developed with 💚 by Cássio Cappellari!
