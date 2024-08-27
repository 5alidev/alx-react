export const getFullYear = () => {
    return new Date().getFullYear();
}

export const getFooterCopy = (isIndex = true) => {
    if (isIndex) {
        return 'Holberton School';
    }
    else {
        return 'Holberton School main dashboard';
    }
}