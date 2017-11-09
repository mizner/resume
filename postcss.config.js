module.exports = {
    plugins: {
        'postcss-partial-import': {
            'prefix': '_',
            'extension': '.css'
        },
        'postcss-cssnext': {
            browsers: [
                'last 2 versions',
                '> 5%',
                'safari >= 9',
                'ie >= 9'
            ],
        },
        'postcss-calc': {},
        'postcss-custom-media': {},
        'postcss-nesting': {},
        'postcss-browser-reporter': {},
        'postcss-reporter': {},
    },
};
