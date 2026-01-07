const t = require('utest@1.0.0');
const pathx = require('path@1.0.0');

t.test('joinURL basics', () => {
  t.expect(pathx.joinURL('a', 'b')).toBe('a/b');
  t.expect(pathx.joinURL('a/', '/b')).toBe('a/b');
  t.expect(pathx.joinURL('/a/', '/b/')).toBe('a/b');
});

module.exports = { run: async (opts) => { await t.run(Object.assign({ quiet: true }, opts)); t.reset(); } };
