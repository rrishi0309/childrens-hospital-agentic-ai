const text51 = {
  "_selector": ["text51"] as const,
  "_isPlugin": true,
  "id": "text51",
    /**
  * Set the current value.
  * @example setValue('Hello world')
  * @param value
  **/
  setValue: (value: boolean | string | number | void): unknown => undefined as unknown,
  /**
  * Clear the current value.
  **/
  clearValue: (): unknown => undefined as unknown,
  /**
  * Scrolls the canvas or parent container so that the selected component appears in the visible area.
  * @param options
  * @param options.block **Nearest:** Scrolls only the minimum amount required for the component to appear in the visible area. Scrolling does not occur if the component is already in view.
  * 
  * **Start:** Scrolls to position the component at the top of the visible area.
  * 
  * **Center:** Scrolls to position the component in the middle of the visible area.
  * 
  * **End:** Scrolls to position the component at the bottom of the visible area.
  * @param options.behavior When off, scrolls instantly to the required position.
  * 
  * When on, scrolls with a smooth animation to the required position.
  **/
  scrollIntoView: (options: {block: 'nearest'|'start'|'center'|'end', behavior: 'auto' | 'smooth'}): void => undefined,
  /**
  * Set the `hidden` value to toggle whether the component is visible. Defaults to `true` without a parameter.
  * @param hidden
  **/
  setHidden: (hidden: boolean): unknown => undefined as unknown,
  /**
  * Reset `value` to the default value.
  **/
  resetValue: (): unknown => undefined as unknown,
  "pluginType": "TextWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "auto",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "left",
  /** Whether the component is visible. */
  "hidden": false,
  /** Whether images are cropped to fit or scaled to fill the width of the component. */
  "imageWidth": "fit",
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The vertical alignment of the contents. */
  "verticalAlign": "center",
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The current value. */
  "value": "<div style=\"color: white; text-align: center; padding: 0px 20px; font-family: Arial, sans-serif;\">\n  <!-- Hero Content Section -->\n  <div style=\"margin-top: 50px;\">\n    <h1 style=\"font-size: 3rem; fon...",
  /** Whether to disable Markdown rendering and display plain text. */
  "disableMarkdown": false,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "scroll",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
