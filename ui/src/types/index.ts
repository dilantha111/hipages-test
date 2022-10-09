export const JobType = { new: 'new', accepted: 'accepted', declined: 'declined' };

export interface InvitedJob {
  id: string;
  contactName: string;
  createdAt: string;
  suburb: string;
  postcode: string;
  category: string;
  description: string;
  price: number;
}

export type AcceptedJob = InvitedJob & { contactPhone: string; contactEmail: string };

export interface JobApiObj {
  id: string;
  status: 'new' | 'accepted' | 'declined';
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  Suburb: SuburbApiObj;
  Category: CategoryApiObj;
}

interface CategoryApiObj {
  id: string;
  name: string;
}

interface SuburbApiObj {
  id: string;
  name: string;
  postcode: string;
}
