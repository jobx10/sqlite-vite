1. Create a Vite Project
npm create vite@latest my-static-site --template vanilla
cd my-static-site
npm install
2. Set Up the Express Server

mkdir server
cd server
npm init -y
npm install express sqlite3

3. Create a file index.js in the server directory:
4.Update package.json to add a start script for the server:
"scripts": {
  "start": "node index.js"
}

5. Set Up Your Vite.js Frontend:

Modify index.html to add a basic structure:
Create a src/main.js file:
npm run build
mv dist ../server/


cd ../server
npm start
