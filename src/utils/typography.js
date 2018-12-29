import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Arbutus Slab",
    "Times New Roman",
    "serif",
  ],
  bodyFontFamily: ["Roboto", "Verdana", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.site-logo, section h2, .list h2': {
      fontFamily: ['Roboto Bold', 'sans-serif'].join(','),
    },
    'section h2, .list h2': {
      ...adjustFontSizeTo('18px')
    },
    '.list h3': {
      ...adjustFontSizeTo('26px')
    },
    '.feature h3': {
      ...adjustFontSizeTo('30px')
    },
    '.site-header nav li a': {
      ...adjustFontSizeTo('24px'),
      fontFamily: ['Arbutus Slab', 'serif'].join(','),
    },
    '.skip-links li a': {
      ...adjustFontSizeTo('30px'),
      fontFamily: ['Arbutus Slab', 'serif'].join(','),
    }
  })
})

export default typography