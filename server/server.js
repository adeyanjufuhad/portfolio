import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'messages.json');

// Ensure messages.json exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Get contact messages
app.get('/api/contact', (req, res) => {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    res.json({ success: true, messages: JSON.parse(data) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Post new contact inquiry
app.post('/api/contact', (req, res) => {
  const { name, email, message, website } = req.body;

  // Honeypot spam check
  if (website) {
    return res.status(400).json({ success: false, error: 'Spam detected' });
  }

  if (!message || !name || !email) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    const messages = JSON.parse(data);

    const newInquiry = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    };

    messages.unshift(newInquiry);
    fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));

    console.log(`[Contact Form] Received new message from ${name} (${email}): "${message.substring(0, 40)}..."`);
    res.status(201).json({ success: true, message: 'Inquiry saved successfully', inquiry: newInquiry });
  } catch (err) {
    console.error('Error saving contact inquiry:', err);
    res.status(500).json({ success: false, error: 'Failed to save message' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio backend server listening on http://localhost:${PORT}`);
});
