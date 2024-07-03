module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/**/*.css',
    ],
    theme: {
        extend: {
            fontFamily: {
                minecraft: ['Minecraft', 'sans-serif'],
            },
            colors: {
                primary: {
                    bg: 'var(--primary-bg-color, #c381b5)',
                    text: 'var(--primary-text-color, #fefcd0)',
                    shadow: 'var(--primary-box-shadow, #fefcd0)',
                },
                secondary: {
                    bg: 'var(--secondary-bg-color, #fefcd0)',
                    text: 'var(--secondary-text-color, #000000)',
                    shadow: 'var(--secondary-box-shadow, #c381b5)',
                },
                outline: {
                    text: 'var(--outline-text-color, #000000)',
                },
            },
        },
    },
    plugins: [],
}