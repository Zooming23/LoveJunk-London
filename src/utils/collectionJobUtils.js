export const getJobColor = (collectionJob) => {
  if (collectionJob.isJunkRecycled) return 'purple';
  if (collectionJob.isReusable) return 'green';
  if (collectionJob.isTrade) return 'orange';
  if (collectionJob.isJunkReused) return 'yellow';
  return 'red';
};

export const convertStatusToHumanReadable = (status) => {
  if (status === 'collected') return 'Collected';
  if (status === 'helpunderway') return 'Help Underway';
  if (status === 'active') return 'Active';
  return 'Unknown';
};
