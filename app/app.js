javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const deployTime = new Date().toLocaleString();

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AWS DevOps CI/CD Pipeline</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          text-align: center;
          padding: 50px;
        }

        .container {
          max-width: 900px;
          margin: auto;
          background: rgba(255,255,255,0.08);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        h1 {
          color: #38bdf8;
          font-size: 3rem;
        }

        h2 {
          color: #f8fafc;
        }

        .status {
          color: #22c55e;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .tech-stack {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 25px;
        }

        .badge {
          background: #2563eb;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: bold;
        }

        .pipeline {
          margin-top: 30px;
          font-size: 1.1rem;
          line-height: 2;
        }

        .footer {
          margin-top: 30px;
          color: #cbd5e1;
        }
      </style>
    </head>
    <body>
      <div class="container">

        <h1>🚀 AWS DevOps CI/CD Pipeline</h1>

        <h2>Built by Roham Kokane</h2>

        <p class="status">
          ✅ Application Running Successfully on AWS EC2
        </p>

        <div class="pipeline">
          GitHub → Jenkins → Docker → Docker Hub → AWS EC2
        </div>

        <div class="tech-stack">
          <div class="badge">AWS EC2</div>
          <div class="badge">Jenkins</div>
          <div class="badge">Docker</div>
          <div class="badge">Docker Hub</div>
          <div class="badge">GitHub</div>
          <div class="badge">Linux</div>
          <div class="badge">Node.js</div>
        </div>

        <div class="footer">
          <p><strong>Deployment Status:</strong> Successful</p>
          <p><strong>Last Request Time:</strong> ${deployTime}</p>
          <p><strong>Version:</strong> v1.1</p>
        </div>

      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
