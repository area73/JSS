const print = `
  
  /**
   * Very crude, reset-like styles taken from the HTML5 Boilerplate:
   * https://github.com/h5bp/html5-boilerplate/blob/5.3.0/dist/doc/css.md#print-styles
   * https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css#L205-L282
   */
  
  @media print {
  
    /**
     * 1. Black prints faster: http://www.sanbeiji.com/archives/953
     */
  
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important; /* [1] */
      box-shadow: none !important;
      text-shadow: none !important;
    }
  
  
    a,
    a:visited {
      text-decoration: underline;
    }
  
    a[href]:after {
      content: " (" attr(href) ")";
    }
  
    abbr[title]:after {
      content: " (" attr(title) ")";
    }
  
  
    /**
     * Don’t show links that are fragment identifiers, or use the 'javascript:'
     * pseudo protocol.
     */
  
    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }
  
    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }
  
  
    /**
     * Printing Tables: http://css-discuss.incutio.com/wiki/Printing_Tables
     */
  
    thead {
      display: table-header-group;
    }
  
    tr,
    img {
      page-break-inside: avoid;
    }
  
  
    img {
      max-width: 100% !important;
    }
  
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
  
    h2,
    h3 {
      page-break-after: avoid;
    }
  
  }
`;

export default print;
