import IJSSCore from '../settings/_settings.core';
import clearFix from '../tools/_tools.clearfix';

/* ==========================================================================
   #MEDIA
   ========================================================================== */

const media = `

/**
 * Place any image- and text-like content side-by-side, as per:
 * http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
 */

${clearFix('.o-media')}
.o-media {
  @include inuit-clearfix();
  display: block;
}

  .o-media__img {
    float: left;
    margin-right: ${IJSSCore.global_spacing_unit};

    > img {
      display: block;
    }

  }

  .o-media__body {
    overflow: hidden;
    display: block;

    &,
    > :last-child {
      margin-bottom: 0;
    }

  }

/* Size variants
   ========================================================================== */

/**
 * Modify the amount of space between our image and our text. We also have
 * reversible options for all available sizes.
 */

.o-media--flush {
  > .o-media__img {
    margin-right: 0;
    margin-left: 0;
 }
}

.o-media--tiny {
  > .o-media__img {
    margin-right: ${IJSSCore.global_spacing_unit_tiny};
  }

  &.o-media--reverse {
    > .o-media__img {
      margin-right: 0;
      margin-left: ${IJSSCore.global_spacing_unit_tiny};
    }
  }
}


.o-media--small {
  > .o-media__img {
    margin-right: ${IJSSCore.global_spacing_unit_small};
  }

  &.o-media--reverse {

    > .o-media__img {
      margin-right: 0;
      margin-left: ${IJSSCore.global_spacing_unit_small};
    }

  }

}


.o-media--large {

  > .o-media__img {
    margin-right: ${IJSSCore.global_spacing_unit_large};
  }

  &.o-media--reverse {

    > .o-media__img {
      margin-right: 0;
      margin-left: ${IJSSCore.global_spacing_unit_large};
    }

  }

}


.o-media--huge {

  > .o-media__img {
    margin-right: ${IJSSCore.global_spacing_unit_huge};
  }

  &.o-media--reverse {

    > .o-media__img {
      margin-right: 0;
      margin-left: ${IJSSCore.global_spacing_unit_huge};
    }
  }
}

/* Reversed media objects
   ========================================================================== */

.o-media--reverse {

  > .o-media__img {
    float: right;
    margin-right: 0;
    margin-left: ${IJSSCore.global_spacing_unit};
  }

}
`;

export default media;