import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, 'Role is required'],
      trim: true,
      maxlength: 200,
    },
    org: {
      type: String,
      required: [true, 'Organization is required'],
      trim: true,
      maxlength: 200,
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
      trim: true,
      maxlength: 100,
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true,
      maxlength: 5000,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

experienceSchema.index({ order: 1 });

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
