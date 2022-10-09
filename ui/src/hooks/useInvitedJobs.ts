import { useQuery } from '@tanstack/react-query';
import { getInvitedJobs } from '../api/JobsApi';

const useInvitedJobs = (formatter?: Function) => {
  return useQuery(['invitedJobs'], async () => {
    const { data } = await getInvitedJobs();

    if (formatter != null) {
      return data.jobs!.map(formatter);
    }

    return data.jobs!;
  });
};

export default useInvitedJobs;
