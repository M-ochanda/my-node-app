const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mitchelle Ochanda | Portfolio Landing Page</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f172a, #1e293b, #312e81);
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .container {
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          padding: 40px;
          backdrop-filter: blur(18px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }

        .badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.18);
          color: #c7d2fe;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          margin-bottom: 20px;
          border: 1px solid rgba(199, 210, 254, 0.2);
        }

        h1 {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 15px;
        }

        .highlight {
          color: #93c5fd;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #dbeafe;
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 25px 0 30px;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 18px;
        }

        .info-label {
          font-size: 0.85rem;
          color: #cbd5e1;
          margin-bottom: 6px;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 10px;
        }

        .btn {
          text-decoration: none;
          padding: 14px 24px;
          border-radius: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: #ffffff;
          color: #111827;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          background: #e2e8f0;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.14);
        }

        .side-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mini-card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          padding: 24px;
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
        }

        .mini-card h3 {
          margin-bottom: 12px;
          font-size: 1.1rem;
          color: #bfdbfe;
        }

        .mini-card p {
          color: #e5e7eb;
          line-height: 1.7;
          font-size: 0.98rem;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .skill {
          background: rgba(147, 197, 253, 0.12);
          color: #dbeafe;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          border: 1px solid rgba(147, 197, 253, 0.15);
        }

        .footer-text {
          margin-top: 20px;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 2.3rem;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <section class="card">
          <div class="badge">Azure App Service • Node.js Portfolio</div>
          <h1>Hi, I'm <span class="highlight">Mitchelle A Ochanda</span></h1>
          <p class="subtitle">
            Welcome to my modern portfolio landing page deployed on Azure App Service.
            This page showcases my learning journey, project work, and cloud deployment success.
          </p>

          <div class="info-grid">
            <div class="info-box">
              <div class="info-label">Name</div>
              <div class="info-value">Mitchelle Ochanda</div>
            </div>
            <div class="info-box">
              <div class="info-label">Course</div>
              <div class="info-value">AZ 104</div>
            </div>
            <div class="info-box">
              <div class="info-label">Project Title</div>
              <div class="info-value">App services Practice</div>
            </div>
            <div class="info-box">
              <div class="info-label">Deployment</div>
              <div class="info-value">Azure App Service (Node.js)</div>
            </div>
          </div>

          <div class="buttons">
            <a class="btn btn-primary" href="https://learn.microsoft.com/en-us/azure/app-service/deploy-zip" target="_blank">
              Explore Azure App Service
            </a>
            <a class="btn btn-secondary" href="https://github.com/" target="_blank">
              View GitHub
            </a>
          </div>

          <p class="footer-text">
            Built with Node.js + Express and deployed successfully to Azure.
          </p>
        </section>

        <aside class="side-panel">
          <div class="mini-card">
            <h3>About This Page</h3>
            <p>
              This is a premium-style landing page designed to look clean, modern, and professional.
              It can be used as a starting point for a student portfolio, project showcase, or personal website.
            </p>
          </div>

          <div class="mini-card">
            <h3>Highlights</h3>
            <div class="skills">
              <span class="skill">Node.js</span>
              <span class="skill">Express</span>
              <span class="skill">Azure App Service</span>
              <span class="skill">Cloud Deployment</span>
              <span class="skill">Portfolio Design</span>
            </div>
          </div>

          <div class="mini-card">
            <h3>Next Step</h3>
            <p>
              You can later connect this project to GitHub, add your real portfolio links,
              upload project screenshots, and turn this into a fully personal website.
            </p>
          </div>
        </aside>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});