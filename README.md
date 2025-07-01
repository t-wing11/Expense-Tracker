# 📒 Expense Tracker — Vue3 + Flask
This is a simple expense tracker app with a Vue 3 frontend and a Flask backend API.
You can add and delete transactions — and they persist on the backend *as long as the server is running)

🚀 How to Run
✅ 1. Clone & Install

# Navigate to backend folder
cd expense-tracker-backend

# Create virtual environment (if you don't have one yet)
python -m venv venv

# Activate virtual environment
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Navigate to frontend folder
cd vue-exspense-tracker

# Install dependencies
npm install


# ✅ 2. Start the Backend (Flask)

Make sure your virtualenv is activated
Then run:
flask run (Runs on http://localhost:5000)

# ✅ 3. Start the Frontend (Vue)

# Navigate to frontend folder
cd vue-exspense-tracker
Start the dev server
npm run dev
Runs on http://localhost:5173 (or another port if 5173 is taken)

# 📡 API Endpoints
GET /expenses → Get all transactions

POST /expenses → Add new transaction
{
  "text": "Coffee",
  "amount": -5.0
}

DELETE /expenses/<id> → Delete transaction by ID

# ⚙️ Example Requests (using curl)
Add Transaction

curl -X POST http://localhost:5000/expenses \
     -H "Content-Type: application/json" \
     -d "{\"text\":\"Lunch\",\"amount\":-12.5}"

     
Get Transactions
curl http://localhost:5000/expenses


Delete Transaction

curl -X DELETE http://localhost:5000/expenses/1



# ⚡ Tech Stack
Frontend: Vue 3 (Vite, Composition API, Axios)

Backend: Python Flask + Flask-CORS


Project was done using vue3 expense tracker tutorial on youtube. Then with the help of chatgpt made a flask backend for it
