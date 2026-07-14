import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import SiteSettings from '../models/SiteSettings.js';

export const getSettings = asyncHandler(async (_req, res) => {
  const settings = await SiteSettings.findOne().sort({ createdAt: -1 });

  if (!settings) {
    throw new ApiError('Site settings not found', 404);
  }

  res.status(200).json({
    success: true,
    data: settings,
  });
});
