import { createMuiTheme, Theme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Dictionary, mapValues, reduce } from 'lodash';

/**
 * Theme will contain colors for specific purposes, read each type description
 */
export interface ColorTheme {
  // #region Brand colors

  /** The type of the color theme defines which variant of the theme should be used */
  type?: undefined | 'light' | 'dark';

  /**
   * A primary color is the color displayed most frequently across your app’s screens and components.
   * If you don’t have a secondary color, your primary color can also be used to accent elements.
   */
  primary: string;

  /**
   * A secondary color provides more ways to accent and distinguish your product. Having a secondary color is optional, and should be applied sparingly to accent select parts of your UI.
   * Secondary colors are best for:
   * - Floating action buttons
   * - Selection controls, like sliders and switches
   * - Highlighting selected text
   * - Progress bars
   * - Links and headlines
   */
  secondary: string;

  // #endregion

  // #region Non-Brand colors

  /** Surface colors affect surfaces of components, such as cards, sheets, and menus */
  surface: string;

  /** The background color appears behind scrollable content. */
  background: string;

  /** Error color indicates errors components, such as text fields. */
  error: string;

  // #endregion

  // #region Typografy

  /** Text color when on top of Primary color */
  onPrimary: string;

  /** Text color when on top of Secondary color */
  onSecondary: string;

  /** Text color when on top of Background color */
  onBackground: string;

  /** Text color when on top of Surface color */
  onSurface: string;

  /** Text color when on top of Error color */
  onError: string;

  // #endregion
}

// tslint:disable:object-literal-sort-keys
export const colorPalettes: Dictionary<ColorTheme> = {
  default: {
    // #region Brand colors
    primary: '#6200EE',
    secondary: '#03DAC5',
    // #endregion

    // #region Non-Brand colors
    background: '#FFF',
    surface: '#FFF',
    error: '#B00020',
    // #endregion

    // #region Typografy
    onPrimary: '#FFF',
    onSecondary: '#000',
    onBackground: '#000',
    onSurface: '#000',
    onError: '#FFF',
    // #endregion
  },
};

export const colorPalettesWithType = reduce(
  colorPalettes,
  (acum, theme, key) => {
    acum[key] = theme;
    acum[`${key}Light`] = { ...theme, type: 'light' };
    acum[`${key}Dark`] = { ...theme, type: 'dark' };
    return acum;
  },
  {} as Dictionary<ColorTheme>,
);

export const themes: Dictionary<Theme> = {
  original: createMuiTheme({ typography: { useNextVariants: true } }),
  originalLight: createMuiTheme({
    palette: { type: 'light' },
    typography: { useNextVariants: true },
  }),
  originalDark: createMuiTheme({
    palette: { type: 'dark' },
    typography: { useNextVariants: true },
  }),
  green: createMuiTheme({
    palette: {
      primary: green,
    },
    typography: { useNextVariants: true },
  }),
  greenDark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: green,
    },
    typography: { useNextVariants: true },
  }),
  greenLight: createMuiTheme({
    palette: {
      type: 'light',
      primary: green,
    },
    typography: { useNextVariants: true },
  }),

  // Use the defined
  ...mapValues(colorPalettesWithType, ({ type, primary, secondary }) => {
    return createMuiTheme({
      palette: {
        type,
        primary: { main: primary },
        secondary: { main: secondary },
      },
      typography: { useNextVariants: true },
    });
  }),
};
