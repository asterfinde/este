// @flow
import type { Theme, OpenColor } from './types';
import createTypography from './createTypography';
import openColor from 'open-color';

// Theme styles are plain JSON because:
//  1) Theme can be loaded from DB.
//  2) RNW fontFamily sucks https://github.com/necolas/react-native-web/issues/881
//  3) React Native styles can be rendered as browser inline styles safely.
// Flow type checking is still enforced.
// TextInput and Picker are system font by default.

const openColorTyped: OpenColor = openColor;

const typography = createTypography({
  fontSize: 16,
  fontSizeScale: 'step5', // perfect fourth, modularscale.com
  lineHeight: 24,
});

const colors = {
  primary: openColorTyped.blue[6],
  success: openColorTyped.green[5],
  warning: openColorTyped.orange[6],
  danger: openColorTyped.red[6],
  black: openColorTyped.gray[8],
  white: openColorTyped.white,
  gray: openColorTyped.gray[5],
};

const styles = {
  text: {
    font: {
      color: colors.black,
      // https://css-tricks.com/snippets/css/system-font-stack
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    weightNormal: { fontWeight: 'normal' },
    weightBold: { fontWeight: '600' },
    primary: { color: colors.primary },
    success: { color: colors.success },
    warning: { color: colors.warning },
    danger: { color: colors.danger },
    black: { color: colors.black },
    white: { color: colors.white },
    gray: { color: colors.gray },
  },

  heading: {
    text: {
      fontWeight: '600',
      marginBottom: typography.rhythm(1),
    },
  },

  block: {
    view: {
      marginBottom: typography.rhythm(1),
      maxWidth: typography.rhythm(28),
    },
  },

  row: {
    spacer: {
      width: typography.rhythm(0.5),
    },
  },

  page: {
    container: {
      width: 960,
    },
    body: {
      paddingTop: typography.rhythm(2),
    },
    footer: {
      borderColor: colors.gray,
      borderTopWidth: 1,
      borderStyle: 'solid',
      marginTop: typography.rhythm(2),
      paddingVertical: typography.rhythm(1),
    },
  },

  mainNav: {
    view: {
      backgroundColor: colors.primary,
      marginVertical: typography.rhythm(0.5),
      paddingHorizontal: typography.rhythm(0.5),
    },
    a: {
      paddingHorizontal: typography.rhythm(0.5),
      paddingVertical: typography.rhythm(0.5),
    },
  },

  form: {
    view: {
      marginBottom: typography.rhythm(1),
      maxWidth: typography.rhythm(21),
    },
  },

  states: {
    disabled: {
      opacity: 0.5,
    },
  },

  textInput: {
    input: {
      color: colors.black,
      marginBottom: typography.rhythm(1),
    },
  },

  textInputBig: {
    input: {
      borderBottomWidth: 1,
      borderColor: colors.gray,
      paddingVertical: typography.rhythm(0.5),
      marginBottom: 0,
    },
    error: {
      minHeight: typography.rhythm(1),
    },
  },

  button: {
    text: {
      color: colors.black,
      fontWeight: '600',
    },
    spaced: {
      borderRadius: 2,
      borderWidth: 1,
      paddingVertical: typography.rhythm(0.2),
      paddingHorizontal: typography.rhythm(1),
    },
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    success: {
      backgroundColor: colors.success,
      color: colors.white,
    },
    warning: {
      backgroundColor: colors.warning,
      color: colors.white,
    },
    danger: {
      backgroundColor: colors.danger,
      color: colors.white,
    },
    black: {
      backgroundColor: colors.black,
      color: colors.white,
    },
    white: {
      backgroundColor: colors.white,
      color: colors.white,
    },
    gray: {
      backgroundColor: colors.gray,
      color: colors.white,
    },
  },

  picker: {
    style: {},
    itemStyle: {
      color: colors.black,
    },
  },
};

export type Styles = typeof styles;

export const lightTheme: Theme = {
  typography,
  colors,
  textColor: 'black',
  pageBackgroundColor: 'white',
  styles,
};

// Dark theme

export const darkTheme: Theme = {
  ...lightTheme,
  textColor: 'white',
  pageBackgroundColor: 'black',
  styles: {
    ...styles,
    text: {
      ...styles.text,
      font: {
        ...styles.text.font,
        color: colors.white,
      },
    },

    textInput: {
      input: {
        ...styles.textInput.input,
        color: colors.white,
      },
    },

    button: {
      ...styles.button,
      text: {
        ...styles.button.text,
        color: colors.white,
      },
    },
  },
};
