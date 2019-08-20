describe('my fist test', () => {
  test('should 1 + 1 to be 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('should 1.235 + 1 to be 2.235', () => {
    expect((1.235 * 1000 + 1 * 1000) / 1000).toBe(2.235);
  });

  it('should 1.235 + 1 to be close to 2.235', () => {
    expect(1.235 + 1).toBeCloseTo(2.235);
  });
});
