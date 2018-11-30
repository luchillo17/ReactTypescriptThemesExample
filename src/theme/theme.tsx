import { mapValues } from 'lodash';
import { ButtonTheme } from 'react-toolbox/components/button';
import { BUTTON } from 'react-toolbox/components/identifiers';

/**
 * Theme will contain colors for specific purposes, read each type description
 */
export interface ColorTheme {
  // #region Brand colors

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
  accent: string;

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
export const colorThemes: { [key: string]: ColorTheme } = {
  default: {
    // #region Brand colors
    primary: '#6200EE',
    accent: '#03DAC5',
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

  light: {
    // #region Brand colors
    primary: '#BB86FC',
    accent: '#03DAC5',
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
  dark: {
    // #region Brand colors
    primary: '#3700B3',
    accent: '#03DAC5',
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
  }
};

export const themes: any = mapValues(colorThemes, ({ primary, accent }) => {
  return {
    [BUTTON]: { primary, accent, } as ButtonTheme,
  }
});
