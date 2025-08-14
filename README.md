# Asialink.ai Exam - Simple CRUD Application

** A simple CRUD (Create, Read, Update, Delete) REST API built with Node Js.**

---

## Project Structure

src/  
├── config/ # Database & app configurations  
├── controllers/ # Route controllers  
├── exception/ # Custom error handling  
├── migrations/ # Database migration(ifapplicable)  
├── models/ # Data models & schemas  
├── routes/ # API endpoint definitions  
├── services/ # Database queries & queries

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: Mysql
- **ORM/Query Builder**: Sequelize
- **Error Handling**: Custom exception middleware

## Setup Prerequisites

- Node.Js (v22+)

## Installation

1. **Clone the repository**:

   ```bash
   git clone crud-exam-be
   cd crud-exam-be

   ```

2. **Install dependencies**:

   ```bash
   npm install or npm i

   ```

3. **Set up environment**: Copy '.env.sample' to '.env' and update database credentials:
   ```bash
   HOST=
   PORT=
   DATABASE_NAME=
   ORIGIN_API_URL=


   ```

## Start Server (development mode)

```bash
npm run dev

```
