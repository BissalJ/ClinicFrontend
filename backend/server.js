const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/clinic_frontend';

app.use(cors());
app.use(express.json());

const appointmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    additionalInfo: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    preferredTime: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({ date: 1, preferredTime: 1 }, { unique: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

const createTransporter = () => {
  if (!process.env.EMAIL || !process.env.PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    family: 4,
  });
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

app.get('/', (req, res) => {
  res.send('Backend running...');
});

app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

app.get('/appointments/availability', async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Date is required' });
  }

  try {
    const appointments = await Appointment.find({ date }).select('preferredTime -_id').lean();
    const bookedSlots = appointments.map((appointment) => appointment.preferredTime);

    res.status(200).json({ date, bookedSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
});

app.post('/send-appointment', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    additionalInfo,
    date,
    preferredTime,
  } = req.body;

  if (!fullName || !email || !phone || !additionalInfo || !date || !preferredTime) {
    return res.status(400).json({ error: 'All appointment fields are required' });
  }

  try {
    const appointment = await Appointment.create({
      fullName,
      email,
      phone,
      additionalInfo,
      date,
      preferredTime,
    });

    const transporter = createTransporter();

    if (transporter) {
      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Appointment Booking',
        text: `New appointment:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Date: ${date}
Preferred Time: ${preferredTime}
Additional Information: ${additionalInfo}`,
      };

      // Send email in background (non-blocking)
      transporter.sendMail(mailOptions)
        .then(() => {
          console.log('Email sent successfully');
        })
        .catch((mailError) => {
          console.error('Email failed:', mailError.message);
        });
    }

    // Return success immediately
    return res.status(201).json({
      message: 'Appointment reserved successfully.',
      appointmentId: appointment._id,
    });

  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({
        error: 'This slot has already been reserved. Please choose another time.',
      });
    }

    console.error(error);
    return res.status(500).json({
      error: 'Failed to save appointment',
    });
  }
});





connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
