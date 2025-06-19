# 🔐 MERN Stack Password Manager

A secure and responsive web-based Password Manager built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to safely store, manage, and retrieve encrypted credentials, with features like password generation, search, and tagging.

---

## 🚀 Features

- 🔑 **User Authentication** (JWT-based with bcrypt password hashing)
- 🔐 **Secure Storage** of passwords using **AES encryption**
- 🧠 **Password Generator** for strong, random credentials
- 📂 Organize passwords with **tags and notes**
- 🔍 Search and filter functionality
- 📱 Responsive and clean React UI

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Frontend     | React.js, Tailwind CSS or Bootstrap  |
| Backend      | Node.js, Express.js                  |
| Database     | MongoDB, Mongoose                    |
| Auth & Security | JWT, bcrypt, crypto (AES)        |

---

## 📁 Project Structure

```
password-manager/
├── client/           # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/           # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── .env              # Environment variables
```

---

## ⚙️ Installation

### Prerequisites

- Node.js
- MongoDB
- npm / yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-username/password-manager.git
cd password-manager
```

### 2. Set up backend

```bash
cd server
npm install
touch .env
```

**`.env` Example:**
```
MONGO_URI=mongodb://localhost:27017/passwordManager
JWT_SECRET=your_jwt_secret_key
ENCRYPTION_KEY=32_byte_encryption_key_here
```

Start the backend:
```bash
npm run dev
```

### 3. Set up frontend

```bash
cd ../client
npm install
npm start
```

The app should be live at `http://localhost:3000`.

---

## 🔒 Security Notes

- Passwords are **hashed** before storing user login data.
- Saved credentials are **AES encrypted** using a symmetric key.
- JWT tokens are used to authenticate API requests.

---

## 📸 Screenshots (optional)

_Add UI screenshots here._

---

## 📄 License

MIT License © [Your Name]

---

## 🙌 Acknowledgements

- React Docs
- MongoDB Docs
- Crypto module for Node.js
- bcrypt for password hashing