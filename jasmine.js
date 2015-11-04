'use strict';

module.exports = {
    "plugins": [
        "jasmine"
    ],
    "env": {
        "jasmine": true,
        "phantomjs": true,
        "mocha": true
    },
    "globals": {
        "loadFixtures": false,
        "appendLoadFixtures": false,
        "setFixtures": false,
        "sandbox": false,
        "before": false,
        "after": false
    },
    "rules": {
        "jasmine/no-suite-dupes": [1, "branch"],
        "jasmine/no-spec-dupes": [1, "branch"]
    }
};
