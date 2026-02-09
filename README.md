# ServiceHub  
# Local Services and Home Repair MarketPlace

ServiceHub  is a full-stack web application that connects customers, vendors, and administrators in a centralized service management system. It allows vendors to manage services, users to browse and request services, and administrators to monitor system activity.

---

## Project Objective
- Develop a multi-role service platform (Admin, Vendor, User)
- Enable service management, booking, and monitoring
- Demonstrate real-world full-stack development

---

## Key Features

### Authentication
- Secure login and registration
- Role-based access control with JWT

### Vendor Module
- Add, edit, and delete services
- View service listings
- View Orders from the Customers

### Admin Module
- Dashboard overview
- Monitor users, Approve or Susbend vendors, and Add services
- View Orders
- Getting notified when a Vendor registered

### User Module
- Browse services
- View service details
- View Orders
---

## Tech Stack

**Frontend:** React.js, CSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Tools:** Git, GitHub, Postman, Nodemon, VS Code  

---

## System Architecture

Frontend (React)
↓
REST API (Express.js / Node.js)
↓
Database (MongoDB)

## Clone Repository
git clone https://github.com/IfnaThasleem/servicehub-collab.git

##Backend Setup
cd backend
npm install
npm run dev

##.env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

## Frontend Setup
cd frontend
npm install
npm run dev

## Learning Outcomes
Full-stack application development
REST API design and integration
JWT authentication
React dashboard UI development
MongoDB database operations
Git version control and project management

## Future Improvements
Payment gateway integration
Cloud deployment
User reviews and ratings

## Authors
Ifna Thasleem & Hafsa Rizvi
Interns
Woocurs Technologies
