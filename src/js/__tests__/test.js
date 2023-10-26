import ErrorRepository from '../app';

test('Проверка вывода текста ошибки, содержащейся в Map, по ее коду', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorsMap.set(404, 'Not found');
  const code = 404;
  const result = 'Not found';
  expect(result).toBe(errorRepository.translate(code));
});

test('Проверка вывода Unknown error при отсутствии переданного кода ошибки в Map', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorsMap.set(404, 'Not found');
  const code = 400;
  const result = 'Unknown error';
  expect(result).toBe(errorRepository.translate(code));
});


