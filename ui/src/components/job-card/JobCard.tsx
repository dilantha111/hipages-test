import React, { ReactElement } from 'react';
import './JobCard.css';
import { Divider, Paper } from '@mui/material';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { InvitedJob } from '../../types';
import { formatToUSD } from '../../utils/currency';
import { dateFomatter } from '../../utils/dateFormatter';

interface Props {
  job: InvitedJob;
  cardBody?: ReactElement;
  type?: JOB_CARD_TYPE;
  logoColor?: string;
}

type JOB_CARD_TYPE = 'ACCEPTED' | 'INVITED';

const JobCard: React.FC<Props> = ({ job, cardBody, type = 'INVITED', logoColor = '#ff9f42' }) => {
  return (
    <Paper className="card">
      <div className="card__top">
        <div className="card-top__logo-container">
          <div className="card-top__logo" style={{ backgroundColor: logoColor }}>
            <span> {job.contactName[0]} </span>
          </div>
        </div>
        <div className="card-top__description">
          <div className="card-top__name"> {job.contactName} </div>
          <div className="card-top__date"> {dateFomatter(job.createdAt)}</div>
        </div>
      </div>
      <Divider />
      <div className="card__address">
        <div className="card-address__section">
          <PinDropOutlinedIcon className="card-address__section-icon" />
          <span>
            {job.suburb} {job.postcode}
          </span>
        </div>
        <div className="card-address__section">
          <BusinessCenterOutlinedIcon className="card-address__section-icon" />
          <span> {job.category} </span>
        </div>
        <div className="card-address__section">
          <span> Job ID: {job.id} </span>
        </div>
        {type === 'ACCEPTED' ? (
          <div className="card-address__section">
            <span> {formatToUSD(job.price)} Lead Invitation </span>
          </div>
        ) : null}
      </div>
      <Divider />
      {cardBody}
    </Paper>
  );
};

export default JobCard;
