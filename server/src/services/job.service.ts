import { Job } from '../db/models';
import Category from '../db/models/Category';
import Suburb from '../db/models/Suburb';

class JobService {
  static async getJobs(status: string) {
    return Job.findAll({ where: { status }, include: [Suburb, Category] });
  }

  static async updateJobStatus(id: string, status: string) {
    return Job.update({ status }, { where: { id } });
  }
}

export default JobService;
