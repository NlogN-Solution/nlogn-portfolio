import { body } from 'express-validator';
import asyncHandler from '../utils/asyncHandler.js';
import Message from '../models/Message.js';

export const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('A valid email is required')
    .normalizeEmail(),
  body('message')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 5000 })
    .withMessage('Message must not exceed 5000 characters'),
];

export const create = asyncHandler(async (req, res) => {
  const { name, email, message = '' } = req.body;

  const newMessage = await Message.create({ name, email, message });

  res.status(201).json({
    success: true,
    message: 'Message sent successfully',
    data: {
      id: newMessage._id,
      name: newMessage.name,
      email: newMessage.email,
      createdAt: newMessage.createdAt,
    },
  });
});
