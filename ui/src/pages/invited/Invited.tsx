import { Button, Divider } from '@mui/material';
import React, { ReactElement } from 'react';
import JobCard from '../../components/job-card';
import useInvitedJobs from '../../hooks/useInvitedJobs';
import useUpdateJobStatus from '../../hooks/useUpdateJobStatus';
import { InvitedJob } from '../../types';
import { formatToUSD } from '../../utils/currency';
import { formatInvitedJob } from '../../utils/modelFormatters';
import './Invited.css';

const Invited: React.FC = () => {
  const { data: jobs, refetch } = useInvitedJobs(formatInvitedJob);
  const mutation = useUpdateJobStatus(refetch);

  const onAccept = (jobId: string) => {
    mutation.mutate({ id: jobId, status: 'accepted' });
  };

  const onReject = (jobId: string) => {
    mutation.mutate({ id: jobId, status: 'declined' });
  };

  const cardBody = (job: InvitedJob): ReactElement => {
    return (
      <>
        <div className="card__body">{job.description}</div>
        <Divider />
        <div className="card__footer">
          <Button
            variant="contained"
            className="card-footer__btn--accpet"
            onClick={() => onAccept(job.id)}>
            Accept
          </Button>
          <Button
            variant="contained"
            className="card-footer__btn--decline"
            onClick={() => onReject(job.id)}>
            Decline
          </Button>
          <span className="card-footer__amount"> {formatToUSD(job.price)} </span>
          <span className="card-footer__description"> Lead Invitation </span>
        </div>
      </>
    );
  };

  return (
    <>
      {jobs !== undefined
        ? jobs.map((job: InvitedJob) => <JobCard job={job} key={job.id} cardBody={cardBody(job)} />)
        : null}
    </>
  );
};

export default Invited;
