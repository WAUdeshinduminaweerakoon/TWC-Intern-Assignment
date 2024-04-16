/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '1502':'1502px',
        '1370':'1370px',
        '870.89px':'870.89px',
        '768':'768px',
        '689':'689px',
        '677':'677px',
        '477':'477px',
        '487':'487px',
        '329.79':'329.79px',
        '318.75':'318.75px',
        '140':'140px',
        '141.63':'141.63px',
        '122':'122px',
        '-367':'-367px',
        '-683':'-683px',
        '-716':'-716px',
        '-4061':'-4061px',
        


      },
      colors: {
        custom: {
          500: '#083F46', 
          501: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

