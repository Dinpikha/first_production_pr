const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let complaintStatus = 'submitted';

app.post('/update-status', (req, res) => {
  complaintStatus = req.body.status;
  console.log('Status updated:', complaintStatus);
  res.json({ success: true });
});

app.get('/status', (req, res) => {
  res.json({ status: complaintStatus });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
