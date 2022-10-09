import { useQuery } from '@tanstack/react-query';
import { getAcceptedJobs } from '../api/JobsApi';

const useAcceptedJobs = (formatter?: Function) => {
  return useQuery(['acceptedJobs'], async () => {
    const { data } = await getAcceptedJobs();

    if (formatter) {
      return data.jobs!!.map(formatter);
    }

    return data.jobs!!;
  });
};

export default useAcceptedJobs;
