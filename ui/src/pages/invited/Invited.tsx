import { Button, Divider } from '@mui/material';
import React, { ReactElement } from 'react';
import JobCard from '../../components/job-card';
import './Invited.css';

const Invited: React.FC = () => {
  const jobs = [
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
    { jobName: 'Bill' },
  ];

  const cardBody = (): ReactElement => {
    return (
      <>
        <div className="card__body">
          Need to paint two aluminium windows and a sliding glass door
        </div>
        <Divider />
        <div className="card__footer">
          <Button variant="contained" className="card-footer__btn--accpet">
            Accept
          </Button>
          <Button variant="contained" className="card-footer__btn--decline">
            Decline
          </Button>
          <span className="card-footer__amount"> $62.00 </span>
          <span className="card-footer__description"> Lead Invitation </span>
        </div>
      </>
    );
  };

  return (
    <>
      {jobs.map(({ jobName }, index) => (
        <JobCard index={index} key={index} cardBody={cardBody()} />
      ))}
    </>
  );
};

export default Invited;
