const reset = `

/**
 * A very simple reset that sits on top of Normalize.css.
 */
  :host,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
  margin: 0;
  padding: 0; }

/**
 * Remove trailing margins from nested lists.
 */
li > ol,
li > ul {
  margin-bottom: 0; }

/**
 * Remove default table spacing.
 */
table {
  border-collapse: collapse;
  border-spacing: 0; }

/**
 * 1. Reset Chrome and Firefox behaviour which sets a 'min-width: min-content;'
 *    on fieldsets.
 */
fieldset {
  min-width: 0;
  /* [1] */
  border: 0; }
`;

export default reset;
