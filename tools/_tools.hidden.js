///* ========================================================================
//   #HIDDEN-VISUALLY
//   ======================================================================== */

// Mixin to quickly apply accessible hiding to elements.

const inuitHiddenVisually = `
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

export default inuitHiddenVisually;
