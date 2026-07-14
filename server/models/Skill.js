import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
      maxlength: 100,
    },
    category: {
      type: String,
      required: [true, 'Skill category is required'],
      trim: true,
      maxlength: 100,
    },
    level: {
      type: Number,
      required: [true, 'Skill level is required'],
      min: [0, 'Level must be at least 0'],
      max: [100, 'Level must be at most 100'],
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

skillSchema.index({ category: 1, order: 1 });

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
