const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <body style="background-color: green; color: white; font-family: sans-serif;">
      <h1>Hello World from Raj</h1>
      <p>Now this is Working CI/CD</p>
      <p>I am doing CI/CD in GitHub Actions and connecting it with AWS EC2 Ubuntu</p>
    </body>
  `);
});

app.get('/status', (req, res) => {
  res.json({ status: 'Online' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});