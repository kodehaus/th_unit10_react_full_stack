const test = require('th_unit09_unit_tests');
const Mocha = require('mocha');

const mocha = new Mocha();

mocha.addFile(test.meets);

mocha.run();
