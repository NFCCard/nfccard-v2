/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontSize: {
            sm: "10px",
            md: "14px",
            lg: "16px",
            xl: "20px",
            "2xl": "24px",
            "3xl": "28px",
            "4xl": "30px",
        },

        extend: {
            colors: {
                primary: "#F99417",
                secondary: "#5D3891",
                sadafi: "#E8E2E2",
                smokeWhite: "#F5F5F5",
                white: "#FFFFFF",
                black: "#212121",
                success: "#3BD49B",
                warning: "#FFE15D",
                error: "#DC3535",
            },
        },
    },
    plugins: [],
};
