# Placement Cell Management System

A web application for managing placement-related activities.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)


## Introduction

This Node.js application is designed to manage placement activities, providing features for user authentication, session management, and more.

## Features

- User authentication using Passport.js
- Session management with MongoDB as the session store
- Flash messages for notifying users
- Basic error handling
- Serving static files and EJS view engine setup

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
   git clone https://github.com/Aizaz6198/placement-cell.git

2. Navigate to the project directory:
    cd placement-cell

3.  Install dependencies:  
    npm install

    
## Usage
Start the server:
    npm start
    
Visit http://localhost:8000 in your web browser.

## Configuration

Create a .env file in the root of your project with the following content:

-MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.iaiuzrt.mongodb.net/your-database.

-SESSION_SECRET=asewe.

-PORT=8000.

Adjust the MongoDB URI and session secret as needed.



## Dependencies 

Node.js
Express
Passport
MongoDB
and other dependencies (listed in package.json)
