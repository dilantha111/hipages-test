import { Request, Response } from 'express';
import JobService from '../services/job.service';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const status = req.query.status as string;
    const jobs = await JobService.getJobs(status);

    return res.json({ jobs });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateJobStatus = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;
    const status = req.body.status;

    await JobService.updateJobStatus(jobId, status);
    return res.status(201).json({ message: 'Job status updated succesfully !!!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
