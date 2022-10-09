import { AcceptedJob, InvitedJob, JobApiObj } from '../types';

const formatInvitedJob = (job: JobApiObj): InvitedJob => {
  return {
    id: job.id,
    contactName: job.contactName,
    createdAt: job.createdAt,
    suburb: job.Suburb.name,
    postcode: job.Suburb.postcode,
    category: job.Category.name,
    description: job.description,
    price: job.price,
  };
};

const formatAcceptedJob = (job: JobApiObj): AcceptedJob => {
  return {
    id: job.id,
    contactName: job.contactName,
    contactPhone: job.contactPhone,
    contactEmail: job.contactEmail,
    createdAt: job.createdAt,
    suburb: job.Suburb.name,
    postcode: job.Suburb.postcode,
    category: job.Category.name,
    description: job.description,
    price: job.price,
  };
};

export { formatInvitedJob, formatAcceptedJob };
