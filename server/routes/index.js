import { Router } from 'express';
import projectRoutes from './projectRoutes.js';
import skillRoutes from './skillRoutes.js';
import experienceRoutes from './experienceRoutes.js';
import contactRoutes from './contactRoutes.js';
import socialRoutes from './socialRoutes.js';
import settingsRoutes from './settingsRoutes.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/experience', experienceRoutes);
router.use('/contact', contactRoutes);
router.use('/social', socialRoutes);
router.use('/settings', settingsRoutes);

export default router;
