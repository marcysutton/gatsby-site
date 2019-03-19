import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.25,
  headerFontFamily: [
    "itc-fenice",
    "Times New Roman",
    "serif",
  ],
  headerFontWeight: 700,
  bodyFontFamily: ["Roboto", "Verdana", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    '.site-logo, .subhead': {
      fontFamily: ['Roboto Bold', 'sans-serif'].join(','),
    },
    'h4': {
      ...adjustFontSizeTo('22px')
    },
    '.subhead': {
      ...adjustFontSizeTo('18px')
    },
    '.list li a.item': {
      ...adjustFontSizeTo('26px'),
      fontFamily: ['itc-fenice', 'serif'].join(','),
    },
    '.feature h3': {
      ...adjustFontSizeTo('30px')
    },
    '.site-header nav li a': {
      ...adjustFontSizeTo('24px'),
      fontFamily: ['itc-fenice', 'serif'].join(','),
    },
    '.skip-links li a': {
      ...adjustFontSizeTo('30px'),
      fontFamily: ['itc-fenice', 'serif'].join(','),
    },
    '.generic-wrap, .feature-list-wrap': {
      ...adjustFontSizeTo('20px')
    }
  })
})

export default typography