import { Button, Divider } from '@mui/material';
import React, { ReactElement } from 'react';
import JobCard from '../../components/job-card';
import useInvitedJobs from '../../hooks/useInvitedJobs';
import { InvitedJob } from '../../types';
import { formatToUSD } from '../../utils/currency';
import { formatInvitedJob } from '../../utils/modelFormatters';
import './Invited.css';

const Invited: React.FC = () => {
  const { status, data: jobs, error, isFetching } = useInvitedJobs(formatInvitedJob);

  const cardBody = (job: InvitedJob): ReactElement => {
    return (
      <>
        <div className="card__body">{job.description}</div>
        <Divider />
        <div className="card__footer">
          <Button variant="contained" className="card-footer__btn--accpet">
            Accept
          </Button>
          <Button variant="contained" className="card-footer__btn--decline">
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
      {jobs
        ? jobs.map((job: InvitedJob) => <JobCard job={job} key={job.id} cardBody={cardBody(job)} />)
        : null}
    </>
  );
};

export default Invited;
