/**
 * Color object contains a default color, and optionally dark & light variants
 */
export interface Color {
  default: string;
  dark?: string;
  light?: string;
}

/**
 * Theme will contain colors for specific purposes, read each type description
 */
export interface Theme {
  // #region Brand colors

  /**
   * A primary color is the color displayed most frequently across your app’s screens and components.
   * If you don’t have a secondary color, your primary color can also be used to accent elements.
   */
  primary: Color;

  /**
   * A secondary color provides more ways to accent and distinguish your product. Having a secondary color is optional, and should be applied sparingly to accent select parts of your UI.
   * Secondary colors are best for:
   * - Floating action buttons
   * - Selection controls, like sliders and switches
   * - Highlighting selected text
   * - Progress bars
   * - Links and headlines
   */
  secondary: Color;

  // #endregion

  // #region Non-Brand colors

  /** Surface colors affect surfaces of components, such as cards, sheets, and menus */
  surface: Color;

  /** The background color appears behind scrollable content. */
  background: Color;

  /** Error color indicates errors components, such as text fields. */
  error: Color;

  // #endregion

  // #region Typografy

  /** Text color when on top of Primary color */
  onPrimary: Color;

  /** Text color when on top of Secondary color */
  onSecondary: Color;

  /** Text color when on top of Background color */
  onBackground: Color;

  /** Text color when on top of Surface color */
  onSurface: Color;

  /** Text color when on top of Error color */
  onError: Color;

  // #endregion
}

// tslint:disable:object-literal-sort-keys
export const themes: { [key: string]: Theme } = {
  default: {
    // #region Brand colors
    primary: {
      default: '#6200EE',
      dark: '#3700B3',
      light: '#BB86FC',
    },
    secondary: {
      default: '#03DAC5',
    },
    // #endregion

    // #region Non-Brand colors
    background: {
      default: '#FFF',
    },
    surface: {
      default: '#FFF',
    },
    error: {
      default: '#B00020',
    },
    // #endregion

    // #region Typografy
    onPrimary: {
      default: '#FFF',
    },
    onSecondary: {
      default: '#000',
    },
    onBackground: {
      default: '#000',
    },
    onSurface: {
      default: '#000',
    },
    onError: {
      default: '#FFF',
    },
    // #endregion
  },
};
