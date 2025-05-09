const _LEVEL_1 = {
  "_button12_events": [{
      "_selector": ["button12","events","0"] as const,
      "event": "click",
      "type": "widget",
      "method": "show",
      "pluginId": "modalFrame1",
      "targetId": null,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
}
const button12 = {
  "_selector": ["button12"] as const,
  "_isPlugin": true,
  "id": "button12",
  "pluginType": "ButtonWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The horizontal alignment of the contents. */
  "horizontalAlign": "stretch",
  "events": _LEVEL_1["_button12_events"] as RetoolArrayWrapper<["button12","events"], typeof _LEVEL_1["_button12_events"], 1>,
  /** Whether the button submits the form specified in `submitTargetId` on click. */
  "submit": false,
  /** The form to submit when `submit` is `true`. */
  "submitTargetId": "",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": true,
  /** The icon to display after the primary content. */
  "iconAfter": "",
  /** Whether the component is visible. */
  "hidden": false,
  /** The amount of margin to render outside of the component. */
  "margin": "4px 8px",
  /** An accessible description of the component for screen readers. */
  "ariaLabel": "",
  /** The primary text content. */
  "text": "📝 Leave Feedback",
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** Whether content can wrap to multiple lines. */
  "allowWrap": true,
  /** The current variant used to style the component. */
  "styleVariant": "solid",
  /** The icon to display before the primary content. */
  "iconBefore": "",
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The position of the loading indicator if `loading` is `true`. */
  "loaderPosition": "auto",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false
} as const
