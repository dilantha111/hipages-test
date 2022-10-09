import { useMutation } from '@tanstack/react-query';
import { updateJobStatus } from '../api/JobsApi';

export interface updateJobStatusInput {
  id: string;
  status: 'accepted' | 'declined';
}

const useUpdateJobStatus = (onSuccess: Function) => {
  return useMutation(
    async ({ id, status }: updateJobStatusInput) => {
      return await updateJobStatus({ id, status });
    },
    {
      onSuccess: async () => {
        await onSuccess();
      },
    }
  );
};

export default useUpdateJobStatus;
