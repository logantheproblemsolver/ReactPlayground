import leapYear from './index';

if('should NOT be a leap year if divisible by 100, not 400', () => {
    const input =1900;
    const expectedOutput = false;
    expectedOutput(leapYear(input)).toBe(expectedOutput);
});