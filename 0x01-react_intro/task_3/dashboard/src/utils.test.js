import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

test('should return current year', () => {
    expect(getFullYear()).toBe('2024');
})


test('footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('notoficaion', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})