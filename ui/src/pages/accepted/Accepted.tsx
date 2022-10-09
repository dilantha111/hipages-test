import React, { ReactElement } from 'react';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './Accepted.css';
import JobCard from '../../components/job-card';
import useAcceptedJobs from '../../hooks/useAcceptedJobs';
import { formatAcceptedJob } from '../../utils/modelFormatters';
import { AcceptedJob } from '../../types';

const Accepted: React.FC = () => {
  const { status, data: jobs, error, isFetching } = useAcceptedJobs(formatAcceptedJob);

  const cardBody = (job: AcceptedJob): ReactElement => {
    return (
      <>
        <div className="card__contact">
          <div className="card-contact__telephone">
            <PhoneOutlinedIcon className="card-contact__tele-icon" />{' '}
            <span> {job.contactPhone} </span>
          </div>
          <div className="card-contact__email">
            <EmailOutlinedIcon className="card-contact__email-icon" />
            <span> {job.contactEmail} </span>
          </div>
        </div>
        <div className="card__description">{job.description}</div>
      </>
    );
  };

  return (
    <>
      {jobs
        ? jobs.map((job: AcceptedJob) => (
            <JobCard
              key={job.id}
              job={job}
              type={'ACCEPTED'}
              logoColor={'#737986'}
              cardBody={cardBody(job)}
            />
          ))
        : null}
    </>
  );
};

export default Accepted;
