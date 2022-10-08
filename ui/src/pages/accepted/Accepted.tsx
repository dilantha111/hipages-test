import React, { ReactElement } from 'react';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './Accepted.css';
import JobCard from '../../components/job-card';

const Accepted: React.FC = () => {
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
        <div className="card__contact">
          <div className="card-contact__telephone">
            <PhoneOutlinedIcon className="card-contact__tele-icon" /> <span>0412345678</span>
          </div>
          <div className="card-contact__email">
            <EmailOutlinedIcon className="card-contact__email-icon" />
            <span>fake@mailinator.com</span>
          </div>
        </div>
        <div className="card__description">
          Need to paint two aluminium windows and a sliding glass door
        </div>
      </>
    );
  };

  return (
    <>
      {jobs.map(({ jobName }, index) => (
        <JobCard
          index={index}
          key={index}
          type={'ACCEPTED'}
          logoColor={'#737986'}
          cardBody={cardBody()}
        />
      ))}
    </>
  );
};

export default Accepted;
