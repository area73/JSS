const cropMock = `
 /**
 * Provide a cropping container in order to display media (usually images)
 * cropped to certain ratios.
 *
 * 1. Set up a positioning context in which the image can sit.
 * 2. This is the crucial part: where the cropping happens.
 */

.o-crop {
  position: relative; /* [1] */
  display: block;
  overflow: hidden; /* [2] */
}

  /**
   * Apply this class to the content (usually 'img') that needs cropping.
   *
   * 1. Image’s default positioning is top-left in the cropping box.
   * 2. Make sure the media doesn’t stop itself too soon.
   */

  .o-crop__content {
    position: absolute;
    top:  0; /* [1] */
    left: 0; /* [1] */
    max-width: none; /* [2] */
  }



  /**
   * We can position the media in different locations within the cropping area.
   */

  .o-crop__content--left-top {
    left: 0;
  }

  .o-crop__content--left-center {
    top: 50%;
    transform: translateY(-50%);
  }

  .o-crop__content--left-bottom {
    top: auto;
    bottom: 0;
  }

  .o-crop__content--right-top {
    right: 0;
    left: auto;
  }

  .o-crop__content--right-center {
    top: 50%;
    right: 0;
    left: auto;
    transform: translateY(-50%);
  }

  .o-crop__content--right-bottom {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
  }

  .o-crop__content--center-top {
    left: 50%;
    transform: translateX(-50%);
  }

  .o-crop__content--center,
  .o-crop__content--center-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .o-crop__content--center-bottom {
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }


/* Crop-ratio variants
   ========================================================================== */  

/**
 * Generate a series of crop classes to be used like so:
 *
 *   <div class="o-crop  o-crop--golden-ratio">
 *
 */

 
     
          .o-crop--2\\:1 {
            padding-bottom: 50%;
          }
          .o-crop--4\\:3 {
            padding-bottom: 75%;
          }
          .o-crop--16\\:9 {
            padding-bottom: 56.25%;
          }
  
  /* Fill modifier
   ========================================================================== */

/**
 * Content stretches to fill it's container while maintaining aspect-ratio.
 */

.o-crop--fill {

  > .o-crop__content {
    min-height: 100%;
    min-width: 100%;
  }

}
`;

export default cropMock;
