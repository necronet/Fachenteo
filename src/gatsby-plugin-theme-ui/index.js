import { toTheme } from 'theme-ui-typography'
import merge from 'lodash.merge'
import funstonTheme from 'typography-theme-funston'

const typography = toTheme(funstonTheme)


export default merge(typography, {
  colors: {
    text: "#252422", //erie black
    background: "#FFFCF2", //floral white
    primary: "#EB5E28", //Flame color
    secondary: "#252422", //black olive
    accent: "#EB5E28", //Flame color
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  images: {
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 99999,
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  links: {
    main: {
      fontSize: [2, 4],
      fontWeight: 'heading',
      fontFamily: 'heading',
      color: 'primary',
      textDecoration: 'none'
    },
    nav: {
      color: 'secondary',
      textDecoration: 'none'
    }
  }

});