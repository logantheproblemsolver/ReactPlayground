import leapYear from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
    const input =1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a lear year if divisible ny 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
})

it('should NOT be a leap year if not divisble by 4', () => {
    expect(leapYear(1983)).toBe(false);
})

it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
})

it('should throw an error for  years before 1582', () => {
    expect(() => {
        leapYear(1568);
    }).toThrow();
    });