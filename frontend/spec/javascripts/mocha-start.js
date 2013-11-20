mocha.checkLeaks();
mocha.globals(['jQuery']);
if (navigator.userAgent.indexOf('PhantomJS') < 0) {
    mocha.run();
}