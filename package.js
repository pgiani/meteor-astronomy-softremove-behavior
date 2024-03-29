Package.describe({
  name: 'pgiani:astronomy-softremove-behavior',
  version: '3.0.3',
  summary: 'redis-oplog compatible soft remove behavior for Meteor Astronomy',
  git: 'https://github.com/pgiani/meteor-astronomy-softremove-behavior',
});

Npm.depends({
  lodash: '4.17.11',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');

  api.use(
    ['ecmascript', 'es5-shim', 'pgiani:redis-astronomy@2.0.0'],
    ['client', 'server'],
  );

  api.mainModule('lib/main.js', ['client', 'server']);
});
