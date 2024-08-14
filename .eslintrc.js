// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        // Añade cualquier regla adicional que necesites aquí.
    },
    env: {
        browser: true,
        es2021: true,
    },
};
