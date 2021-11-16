const COLORS = {
  primary: '#000',
  secondary: '#fff',
  'primary-alt': '#ddd',
}

const FONTS = {
  fontFamily: {
    primary: 'Sora, sans-serif',
    secondary: 'Inter, sans-serif',
  },
  fontSize: {
    default: {
      h1: '2.5rem',
      h2: '1.5rem',
      h3: '1.25rem',
      h4: '1.125rem',
      text: '1rem',
    },
    desktop: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '1.5rem',
      h4: '1.25rem',
      text: '1.125rem',
    },
  },
}

const BOX_SHADOW = {
  default: '8px 8x 0 0 var(--color-primary);',
  desktop: '12px 12px 0 0 var(--color-primary);',
}

const BREAKPOINTS = {
  mobile: '650',
  tablet: '960',
  desktop: '1200',
  xlarge: '1440',
}

export default {
  COLORS,
  FONTS,
  BOX_SHADOW,
  BREAKPOINTS,
}
