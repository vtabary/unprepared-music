import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an empty duration', () => {
    expect(new DurationPipe().transform(0)).toEqual('00:00.00');
  });

  it('should return a duration without hours', () => {
    expect(new DurationPipe().transform(156)).toEqual('02:36.00');
  });

  it('should return a duration with hours', () => {
    expect(new DurationPipe().transform(7356)).toEqual('02:02:36.00');
  });
});
