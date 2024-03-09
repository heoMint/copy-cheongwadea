/** @type {import('tailwindcss').Config} */
module.exports = {
    // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가
    // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            blue: '#011131',
            black: '#000',
            beige: '#af8e65',
            navy: '#01205c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
        },

        extend: {
            keyframes: {
                intro: {
                    from: { transform: 'translateY(8rem)', opacity: 0 },
                    to: { transform: 'translateY(0rem)', opacity: 1 },
                },
                introImg: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },

                mminus: {
                    minus26: '-26px',
                    minus240: '-240px',
                },
                line: {},
            },
            animation: {
                intro: 'intro 1s ease-in-out ',
                fadeIn: 'introImg 1s ease-in-out',
                transition: 'transition .5s ease-in-out',
            },
            width: {
                370: '370px',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
};
