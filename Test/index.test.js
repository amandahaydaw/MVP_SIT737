/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync(path.resolve(__dirname, '../views/index.html'), 'utf8');
global.document = new JSDOM(html).window.document;
jest
    .dontMock('fs');

describe('button', function() {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('Getting start button is existed', function() {
        expect(document.getElementById('login-button-div')).toBeTruthy();

    });

    it('Check if Icon is returning ', function() {
        expect(document.getElementsByClassName('logo-icon')).toBeTruthy();

    });
});