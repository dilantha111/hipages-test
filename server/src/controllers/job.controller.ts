import { Request, Response } from 'express';
import { Job } from '../db/models';
import Category from '../db/models/Category';
import Suburb from '../db/models/Suburb';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const status = req.query.status;
    const jobs = await Job.findAll({ where: { status }, include: [Suburb, Category] });

    return res.json({ jobs });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateJobStatus = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.id;
    const status = req.body.status;

    await Job.update({ status }, { where: { id: jobId } });
    return res.status(201).json({ message: 'Job status updated succesfully !!!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
