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

This application was built from scratch with **JavaScript**, **Node.js**, **Express**, **MongoDB** and using MVC software design patterns. In this API was created routes for user registration with encrypted password which authenticates users by returning a **JWT token** to validate the login, with a feature that provides **password recovery through Nodemailer**.

## 🗺️ Routes

**User Authentication:**

- POST: ```base_url/auth/register```
- POST: ```base_url/auth/authenticate```
- POST: ```base_url/auth/forgot_password```
- POST: ```base_url/auth/reset_password```

**CRUD Projects:**

- GET: ```base_url/projects/```
- GET: ```base_url/projects/:projectId```
- POST: ```base_url/projects/```
- PUT: ```base_url/projects/:projectId```
- DELETE: ```base_url/projects/:projectId```

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
