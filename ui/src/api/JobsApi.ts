import axios from 'axios';
import { apis } from './config';
import { JobApiObj, JobType } from '../types';

export const getInvitedJobs = async () => {
  return await axios.get(apis.jobs.getJobs, { params: { status: JobType.new } });
};

export const getAcceptedJobs = async () => {
  return await axios.get(apis.jobs.getJobs, { params: { status: JobType.accepted } });
};

export const updateJobStatus = async (input: { id: string; status: JobApiObj['status'] }) => {
  return await axios.put(apis.jobs.udpateJob + `/${input.id}`, { status: input.status });
};
