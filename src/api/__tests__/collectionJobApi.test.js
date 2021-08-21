import { getLondonJobsApi } from '../collectionJobApi';
import londonData from '../../mockData/londonJobs';

describe('collectionJobApi', () => {
  it('returns london data', () => {
    expect(getLondonJobsApi()).toBe(londonData);
  });
});
