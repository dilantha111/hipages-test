import axios from 'axios';
import { apis } from './config';
import { JobType } from '../types';

export const getInvitedJobs = async () => {
  return axios.get(apis.jobs.getJobs, { params: { status: JobType.new } });
};

export const getAcceptedJobs = async () => {
  return axios.get(apis.jobs.getJobs, { params: { status: JobType.accepted } });
};
