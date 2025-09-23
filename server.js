const express = require('express')
const app = express()
const port = 3000

const users = [
  { id: 1, name: "Shailesh Modi", email: "shailesh@example.com" },
  { id: 2, name: "Amit Patel", email: "amit@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))