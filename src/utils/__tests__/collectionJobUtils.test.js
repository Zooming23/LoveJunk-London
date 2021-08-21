import {
  convertStatusToHumanReadable,
  getJobColor,
} from '../collectionJobUtils';

describe('collectionJobUtils', () => {
  describe('getJobColor', () => {
    it('returns purple if junk is recycled', () => {
      expect(getJobColor({ isJunkRecycled: true })).toBe('purple');
    });
    it('returns green if its reusable', () => {
      expect(getJobColor({ isReusable: true })).toBe('green');
    });
    it('returns orange if item is trade', () => {
      expect(getJobColor({ isTrade: true })).toBe('orange');
    });
    it('returns yellow if junk is reused', () => {
      expect(getJobColor({ isJunkReused: true })).toBe('yellow');
    });
    it('returns red as the default', () => {
      expect(getJobColor({ someRubbish: true })).toBe('red');
    });
  });

  describe('convertStatusToHumanReadable', () => {
    it('returns the collected status correctly', () => {
      expect(convertStatusToHumanReadable('collected')).toBe('Collected');
    });
    it('returns the helpunderway status correctly', () => {
      expect(convertStatusToHumanReadable('helpunderway')).toBe(
        'Help Underway',
      );
    });
    it('returns the active status correctly', () => {
      expect(convertStatusToHumanReadable('active')).toBe('Active');
    });
    it('returns an unknown status correctly', () => {
      expect(convertStatusToHumanReadable('rubbish status')).toBe('Unknown');
    });
  });
});
