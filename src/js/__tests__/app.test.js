import orderByProps from '../app';

test('getting information about the characters health', () => {
  const testArr = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const input = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(testArr, input);
  expect(received).toEqual(expected);
});

test('getting information about the characters health', () => {
  const testArr = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const input = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(testArr, input);
  expect(received).toEqual(expected);
});
