import { Job } from './models';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Job.sync();
};
export default dbInit;
