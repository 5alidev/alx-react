import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('check if getFullYear return the current year', () => {
    expect(getFullYear()).toBe(2024);
});

test('check if getFooterCopy return the right text based on isIndex param', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('check if getLatestNotification returns the right HTML code', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});