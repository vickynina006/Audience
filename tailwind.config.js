/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            mdx: "950px",
            lg: "1024px",
            lgx: "1280px",
            xl: "1440px",
        },

        extend: {
            fontFamily: {
                opensans: ["Open Sans", "sans-serif"],
            },
            backgroundImage: {
                "left-glow": "radial-gradient(circle  at left, rgba(1,200,116,0.15) 6%, rgba(5,6,6,0.99) 20%, rgba(5,6,6,0.99) 60%, rgba(5,6,6,1) 100%)",
                "right-glow": "radial-gradient(circle  at right, rgba(1,200,116,0.15) 6%, rgba(5,6,6,0.99) 20%, rgba(5,6,6,0.99) 60%, rgba(5,6,6,1) 100%)",
            },

            colors: {
                bgblack: "#060707",
                bgpurple: "#68476B",
                bgGreen: "rgb(118,185,119)",
                textgreen: "#01c171",
                bgGreen2: "#01c874",
                bgGreen3: "#017551",
                darkash: "#101010",
                darkblue1: "#192136",
                darkblue2: "#1d222d",
            },
        },
    },
    plugins: [],
};