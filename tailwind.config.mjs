/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "#1c1c1c",
            foreground: "#e3e5e7",
            my: {
               primary: "#7850e4",
            },
         },
      },
   },
   darkMode: "class",
   plugins: [],
};
