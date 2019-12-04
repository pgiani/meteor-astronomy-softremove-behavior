# Soft remove behavior for Meteor Astronomy compatible with Redis-oplog

## RedisOplog

A full re-implementation of the Meteor's MongoDB oplog tailing. This time, reactivity is controlled by the app, opening a new world
into building reactive applications, highly scalable chat apps, games, and added reactivity for non-persistent data.

The soft remove behavior let's you remove a document without deleting it from the collection. Instead it's marked as removed. Removed documents can be excluded from displaying in a template.

A detailed information about behavior can be found [here](http://jagi.github.io/meteor-astronomy/v2#softremove).
