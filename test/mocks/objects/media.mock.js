const mediaMock = `
/**
 * Place any image- and text-like content side-by-side, as per:
 * http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
 */
 

    .o-media:after {
      content: "" !important;
      display: block !important;
      clear: both !important;
    }
.o-media__img {
  float: left;
  margin-right: 24px; 
}
.o-media__img > img {
    display: block; 
}

.o-media__body {
  overflow: hidden;
  display: block; 
}
  .o-media__body,
  .o-media__body > :last-child {
    margin-bottom: 0; 
}
  

/* Size variants
   ========================================================================== */

/**
 * Modify the amount of space between our image and our text. We also have
 * reversible options for all available sizes.
 */
 
 
  .o-media--none > .o-media__img { margin-right: 0px; }
  .o-media--none.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 0px; 
  }

  .o-media--tiny > .o-media__img { margin-right: 6px; }
  .o-media--tiny.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 6px; 
  }

  .o-media--small > .o-media__img { margin-right: 12px; }
  .o-media--small.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 12px; 
  }

  .o-media--normal > .o-media__img { margin-right: 24px; }
  .o-media--normal.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 24px; 
  }

  .o-media--large > .o-media__img { margin-right: 48px; }
  .o-media--large.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 48px; 
  }

  .o-media--huge > .o-media__img { margin-right: 96px; }
  .o-media--huge.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: 96px; 
  }

 
/* Reversed media objects
   ========================================================================== */

.o-media--reverse {

  > .o-media__img {
    float: right;
    margin-right: 0;
    margin-left: 24px;
  }
}
`;

export default mediaMock;
