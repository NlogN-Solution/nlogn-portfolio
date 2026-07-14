import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      required: [true, 'Site name is required'],
      trim: true,
      maxlength: 200,
    },
    tagline: {
      type: String,
      trim: true,
      maxlength: 500,
      default: '',
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 320,
      default: '',
    },
    description: {
      type: String,
      trim: true,
      maxlength: 5000,
      default: '',
    },
    seoTitle: {
      type: String,
      trim: true,
      maxlength: 200,
      default: '',
    },
    seoDescription: {
      type: String,
      trim: true,
      maxlength: 500,
      default: '',
    },
    ogImage: {
      type: String,
      trim: true,
      maxlength: 500,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);

export default SiteSettings;
