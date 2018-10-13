const icomoon = `
  @font-face {
    font-family: 'icomoon';
    src:  url('/assets/fonts/icomoon.eot?2n0s5x');
    src:  url('/assets/fonts/icomoon.eot?2n0s5x#iefix') format('embedded-opentype'),
          url('/assets/fonts/icomoon.ttf?2n0s5x') format('truetype'),
          url('/assets/fonts/icomoon.woff?2n0s5x') format('woff'),
          url('/assets/fonts/icomoon.svg?2n0s5x#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-pause:before {
    content: '\\e034';
  }

  .icon-play:before {
    content: '\\e037';
  }

  .icon-refresh:before {
    content: '\\e5d5';
  }

  .icon-skip-next:before {
    content: '\\e044';
  }

  .icon-skip-previous:before {
    content: '\\e045';
  }

  .icon-stop:before {
    content: '\\e047';
  }
`

export default icomoon
