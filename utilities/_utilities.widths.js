/* ==========================================================================
   #WIDTHS
   ========================================================================== */
/**
 * inuitcss generates a series of utility classes that give a fluid width to
 * whichever element they’re applied, e.g.:
 *
 *   <img src="" alt="" class="u-1/2" />
 *
 * These classes are most commonly used in conjunction with our layout system,
 * e.g.:
 *
 *   <div class="o-layout__item  u-1/2">
 *
 * By default, inuitcss will also generate responsive variants of each of these
 * classes by using your Sass MQ configuration, e.g.:
 *
 *   <div class="o-layout__item  u-1/1  u-1/2@tablet  u-1/3@desktop">
 *
 * Optionally, inuitcss can generate offset classes which can push and pull
 * elements left and right by a specified amount, e.g.:
 *
 *   <div class="o-layout__item  u-2/3  u-pull-1/3">
 *
 * This is useful for making very granular changes to the rendered order of
 * items in a layout.
 *
 * N.B. This option is turned off by default.
 */

import roundNumber from '../tools/utils';

// Which fractions would you like in your grid system(s)? By default, inuitcss
// provides you fractions of one whole, halves, thirds, quarters and fifths,
// e.g.:
//
//   .u-1/2
//   .u-2/5
//   .u-3/4
//   .u-2/3
const inuitFractions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


// Optionally, inuitcss can generate classes to offset items by a certain width.
// Would you like to generate these types of class as well? E.g.:
//
//   .u-push-1/3
//   .u-pull-2/4
//   .u-pull-1/5
//   .u-push-2/3
const offSetPull = true;
const offSetPush = true;

// By default, inuitcss uses fractions-like classes like `<div class="u-1/4">`.
// You can change the `/` to whatever you fancy with this variable.
const widthsDelimiter = '\/';


// TODO:

// When using Sass-MQ, this defines the separator for the breakpoints suffix
// in the class name. By default, we are generating the responsive suffixes
// for the classes with a `@` symbol so you get classes like:
// <div class="u-3/12@mobile">
// $inuit-widths-breakpoint-separator: \@ !default;

// const roundNumber = (num, dec) => Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);

const fraction2percent = (dividend, divisor) => (roundNumber((dividend / divisor) * 100, 4));

const printFraction = (dividend, divider) => `.u-${dividend}${widthsDelimiter}${divider} {width: ${fraction2percent(dividend, divider)}% !important;}`;

const printPull = (dividend, divider) => `.u-pull-${dividend}${widthsDelimiter}${divider}  {
      position: relative !important;
      right: ${fraction2percent(dividend, divider)}% !important;
      left: auto !important; /!* [1] *!/
   }`;

// [1]. Reset any leftover or conflicting 'left'/'right' values.

const printPush = (dividend, divider) => `.u-push-${dividend}${widthsDelimiter}${divider} {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: ${fraction2percent(dividend, divider)}% !important;
    }`;


const generateFractions = (divider) => {
  let acc = '';
  for (let dividend = 1; dividend <= divider; dividend += 1) {
    acc += `
      ${printFraction(dividend, divider)}
      ${offSetPull && printPull(dividend, divider)}
      ${offSetPush && printPush(dividend, divider)}
    `;
  }
  return acc;
};

const uFractions = inuitFractions => inuitFractions.reduce((prev, next) => `${prev}\n${generateFractions(next)}`, '');


const widths = uFractions(inuitFractions);

export default widths;


/*


// A mixin to spit out our width classes. Pass in the columns we want the widths
// to have, and an optional suffix for responsive widths. E.g. to create thirds
// and quarters for a small breakpoint:
//
// @include widths(3 4, -sm);

@mixin inuit-widths($columns, $breakpoint: null) {

  // Loop through the number of columns for each denominator of our fractions.
  @each $denominator in $columns {

    // Begin creating a numerator for our fraction up until we hit the
    // denominator.
    @for $numerator from 1 through $denominator {

      // Build a class in the format `.u-3/4[@<breakpoint>]`.

      .u-#{$numerator}#{$inuit-widths-delimiter}#{$denominator}#{$breakpoint} {
        width: ($numerator / $denominator) * 100% !important;
      }
      @if ($inuit-offsets == true) {

        /!**
         * 1. Reset any leftover or conflicting `left`/`right` values.
         *!/

        // Build a class in the format `.u-push-1/2[@<breakpoint>]`.

        .u-push-#{$numerator}#{$inuit-widths-delimiter}#{$denominator}#{$breakpoint} {
          position: relative !important;
          right: auto !important; /!* [1] *!/
          left: ($numerator / $denominator) * 100% !important;
        }

        // Build a class in the format `.u-pull-5/6[@<breakpoint>]`.

        .u-pull-#{$numerator}#{$inuit-widths-delimiter}#{$denominator}#{$breakpoint} {
          position: relative !important;
          right: ($numerator / $denominator) * 100% !important;
          left: auto !important; /!* [1] *!/
        }
      }

    }

  }

  @if ($inuit-offsets == true and $breakpoint != null) {

    // Create auto push and pull classes.

    .u-push-none#{$breakpoint} {
      left: auto !important;
    }

    .u-pull-none#{$breakpoint} {
      right: auto !important;
    }

  }

}


/!**
 * A series of width helper classes that you can use to size things like grid
 * systems. Classes take a fraction-like format (e.g. `.u-2/3`). Use these in
 * your markup:
 *
 * <div class="u-7/12">
 *
 * The following will generate widths helper classes based on the fractions
 * defined in the `$inuit-fractions` list.
 *!/

@include inuit-widths($inuit-fractions);


/!**
 * If we’re using Sass-MQ, automatically generate grid system(s) for each of our
 * defined breakpoints, and give them a Responsive Suffix, e.g.:
 *
 * <div class="u-3/12@mobile">
 *!/


@if (variable-exists(mq-breakpoints)) {

  @each $inuit-bp-name, $inuit-bp-value in $mq-breakpoints {

    @include mq($from: $inuit-bp-name) {
      @include inuit-widths($inuit-fractions, #{$inuit-widths-breakpoint-separator}#{$inuit-bp-name});
    }

  }

}
*/