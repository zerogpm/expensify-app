const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymouns') => `Hello ${name}!`;

test('should add two number', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Chris');
  expect(result).toBe('Hello Chris!');
});

test('should generate Anonymouns name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymouns!');
});
