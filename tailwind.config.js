module.exports = {
  darkMode: 'class',
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      'sans': ['Raleway'],
      'serif': ['Georgia'],
      'display': ['Oswald'],
      'body': ['Roboto'],
      'finesse': ['Tangerine'],
      'dd': ['Fondamento'],
      'dea': ['April Fatface'],
      'maimi': ['Parisienne'],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
      backgroundImage:{
        hero: "url('/img/shibuya-2328029.jpg')",
       },
      animation:{
        fadeIn: "fadeIn 1s ease both",
        fadeOut: "fadeOut 1s ease both",
        slideInTop: "slideInTop 1s ease",
        slideOutTop: "slideOutTop 1s ease",
        slideInBottom: "slideInBottom 1 ease",
        slideOutBottom: "slideOutBottom 1s ease",
        slideInRight: "slideInRight 1s ease",
        slideOutRight: "slideOutRight 1s ease",
        flipInRight: "flipInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideFwdCenter: "slideFwdCenter 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideInTop: {
          "0%": {
              transform: "translateY(-20px)",
              opacity: "0",
          },
          "100%": {
              transform: "translateY(0)",
              opacity: "1",
          }
        },
        slideOutTop: {
          "0%": {
              transform: "translateY(0px)",
          },
          "100%": {
              transform: "translateY(-120px)",
              opacity: "0",
          }
        },
        slideInBottom: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          }
        },
        slideOutBottom: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px)",
            opacity: "0",
          }
        },
        slideInRight: {
          "0%": {
            transform: "translateX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(20px)",
            opacity: "1",
          }
        },
        slideOutRight: {
          "0%": {
            transform: "translateX(20px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "0",
          }
        },
        flipInRight: {
          "0%": {
              transform: "rotateY(-80deg)",
              opacity: "0",
          },
          to: {
              transform: "rotateY(0)",
              opacity: "1",
          }
      },
      slideFwdCenter: {
        "0%": {
            transform: "translateZ(0)",
        },
        to: {
            transform: "translateZ(160px)",
        }
    }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}
