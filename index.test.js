const trekPxToRem = require('./index')();

test('changes px units to rem', () => {
  const decl = { value: '' };
  
  decl.value = '24px';
  trekPxToRem.Declaration(decl);
  expect(decl.value).toBe('1.5rem');
  
  decl.value = '2px 0 4px';
  trekPxToRem.Declaration(decl);
  expect(decl.value).toBe('0.125rem 0 0.25rem');
  
  decl.value = '12 80px 0 40px';
  trekPxToRem.Declaration(decl);
  expect(decl.value).toBe('12 5rem 0 2.5rem');
  
  decl.value = 'calc(100vh - 120px)';
  trekPxToRem.Declaration(decl);
  expect(decl.value).toBe('calc(100vh - 7.5rem)');
});