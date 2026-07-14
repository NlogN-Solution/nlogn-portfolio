import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: [true, 'Platform is required'],
      trim: true,
      maxlength: 100,
    },
    url: {
      type: String,
      required: [true, 'URL is required'],
      trim: true,
      maxlength: 500,
    },
    label: {
      type: String,
      required: [true, 'Label is required'],
      trim: true,
      maxlength: 100,
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

socialLinkSchema.index({ order: 1 });

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

export default SocialLink;
