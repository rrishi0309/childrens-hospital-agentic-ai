const _LEVEL_1 = {
  "_container14_viewKeys": ["View 1"] as const,
  "_container14_views": [{
      "_selector": ["container14","views","0"] as const,
      "key": "View 1",
      "label": "",
      "tooltip": "",
      /** Whether the component is visible. */
      "hidden": false,
      /** Whether user input, interaction, or selection is disabled. */
      "disabled": false,
      "icon": "",
      "iconPosition": "left"
    } as const] as const,
}
const container14 = {
  "_selector": ["container14"] as const,
  "_isPlugin": true,
  "id": "container14",
  "pluginType": "ContainerWidget2",
  /** Whether the height automatically resizes to fit content or is a fixed size. */
  "heightType": "fixed",
  /** The configuration mode for [option lists](https://docs.retool.com/apps/scripting-events/guides/option-lists). Either `dynamic` for mapped options or `static` for manual options. */
  "itemMode": "static",
  /** An array of all view keys */
  "viewKeys": _LEVEL_1["_container14_viewKeys"] as RetoolArrayWrapper<["container14","viewKeys"], typeof _LEVEL_1["_container14_viewKeys"], 1>,
  /** The key of the currently selected view */
  "currentViewKey": "View 1",
  /** Whether user input, interaction, or selection is disabled. */
  "disabled": false,
  /** Whether the component has an enabled **Click** event handler. */
  "clickable": false,
  /** The amount of padding used within the header. */
  "headerPadding": "4px 12px",
  /** Whether to show the border above the footer area. */
  "showFooterBorder": true,
  /** Whether the container is in full bleed mode, where it can only contain a single component which expands to fit the available space. */
  "enableFullBleed": false,
  /** Whether to show the border around the component. */
  "showBorder": false,
  /** Whether the component is visible. */
  "hidden": false,
  /** Whether to display the header area of the component. */
  "showHeader": false,
  /** Whether to display a loading indicator whenever nested components are fetching data. */
  "hoistFetching": false,
  /** The amount of margin to render outside of the component. */
  "margin": "0",
  /** Settings for each view. All properties except `key` are used by linked components that control this container, such as Tabs. */
  "views": _LEVEL_1["_container14_views"] as RetoolArrayWrapper<["container14","views"], typeof _LEVEL_1["_container14_views"], 1>,
  /** Whether the component remains visible in the editor if `hidden` is `true`. */
  "showInEditor": false,
  /** The text to display in a tooltip on hover or focus. */
  "tooltipText": "",
  /** The amount of padding used within the container. */
  "padding": "12px",
  "style": {
    "_selector": ["container14","style"] as const,
    "boxShadow": "highElevation"
  } as const,
  /** The index of the currently selected view */
  "currentViewIndex": 0,
  /** The transition animation to use when switching views */
  "transition": "none",
  /** Whether to show the border under the header area. */
  "showHeaderBorder": true,
  /** The amount of padding used within the footer. */
  "footerPadding": "4px 12px",
  /** Whether to display the footer area of the component. */
  "showFooter": false,
  /** Whether the component is currently hovered. */
  "hovered": false,
  /** Whether to display a loading indicator. */
  "loading": false,
  /** The overflow behavior when the contents exceeds the height of the component. Either `scroll` to display a scrollbar or `hidden` to clip the contents. */
  "overflowType": "hidden",
  /** Whether the component takes up space on the canvas if `hidden` is `true`. */
  "maintainSpaceWhenHidden": false,
  /** Whether to display the body of the component if `heightType` is `auto`. */
  "showBody": true
} as const
