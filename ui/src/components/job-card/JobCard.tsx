import React, { ReactElement } from 'react';
import './JobCard.css';
import { Divider, Paper } from '@mui/material';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

interface Props {
  index: number;
  cardBody?: ReactElement;
  type?: JOB_CARD_TYPE;
  logoColor?: string;
}

type JOB_CARD_TYPE = 'ACCEPTED' | 'INVITED';

const JobCard: React.FC<Props> = ({ index, cardBody, type = 'INVITED', logoColor = '#ff9f42' }) => {
  return (
    <Paper className="card">
      <div className="card__top">
        <div className="card-top__logo-container">
          <div className="card-top__logo" style={{ backgroundColor: logoColor }}>
            <span> B </span>
          </div>
        </div>
        <div className="card-top__description">
          <div className="card-top__name"> Bill </div>
          <div className="card-top__date"> January 4 @ 2:37 pm </div>
        </div>
      </div>
      <Divider />
      <div className="card__address">
        <div className="card-address__section">
          <PinDropOutlinedIcon className="card-address__section-icon" /> <span> Yandera 2574 </span>
        </div>
        <div className="card-address__section">
          <BusinessCenterOutlinedIcon className="card-address__section-icon" />
          <span> Painters </span>
        </div>
        <div className="card-address__section">
          <span> Job ID: 5577421 </span>
        </div>
        {type === 'ACCEPTED' ? (
          <div className="card-address__section">
            <span> $62.00 Lead Invitation </span>
          </div>
        ) : null}
      </div>
      <Divider />
      {cardBody}
    </Paper>
  );
};

export default JobCard;
