function getLocaleString(language: string, string: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const locale = require(`../languages/${language}`);
    return locale["default"][string];
}

export { getLocaleString };
