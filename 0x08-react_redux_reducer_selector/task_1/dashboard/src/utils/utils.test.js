const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');

describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('should return the correct string when the argument is true', () => {
        const isIndexPage = true;
        const expected = 'Holberton School main dashboard';
        expect(getFooterCopy(isIndexPage)).toBe(expected);
    });

    it('should return the correct string when the argument is false', () => {
        const isIndexPage = false;
        const expected = 'Holberton School';
        expect(getFooterCopy(isIndexPage)).toBe(expected);
    });
});

describe('getLatestNotification', () => {
    it('should return the correct string', () => {
        const expected = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expected);
    });
});
