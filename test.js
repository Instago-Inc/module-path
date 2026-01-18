const t = require('utest@latest');
const pathx = require('path@latest');

t.test('joinURL basics', () => {
  t.expect(pathx.joinURL('a', 'b')).toBe('a/b');
  t.expect(pathx.joinURL('a/', '/b')).toBe('a/b');
  t.expect(pathx.joinURL('/a/', '/b/')).toBe('a/b');
});

module.exports = { run: async (opts) => { await t.run(Object.assign({ quiet: true }, opts)); t.reset(); } };
