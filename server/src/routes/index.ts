import { Router } from 'express';
import { getJobs, updateJobStatus } from '../controllers/job.controller';

const router = Router();

router.get('/jobs', getJobs);
router.put('/job/:id', updateJobStatus);

export default router;
