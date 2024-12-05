import { css } from 'lit';

export const baseStyles = css`
  :host {
    --color-primary-orange: hsl(26, 100%, 55%);
    --color-primary-pale-orange: hsl(25, 100%, 94%);
    --color-very-dark-blue: hsl(220, 13%, 13%);
    --color-dark-grayish-blue: hsl(219, 9%, 45%);
    --color-grayish-blue: hsl(220, 14%, 75%);
    --color-light-grayish-blue: hsl(223, 64%, 98%);
    --color-white: hsl(0, 0%, 100%);
    --color-black-75: hsla(0, 0%, 0%, 0.75);

    --font-family: 'Kumbh Sans', sans-serif;
    --font-size-body: 16px;
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --breakpoint-mobile: 375px;
    --breakpoint-desktop: 1440px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	max-width: 1200px;
	margin: 0 auto;
  }


  :host {
    display: block;
    font-family: var(--font-family);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-regular);
    background-color: var(--color-white);
    color: var(--color-very-dark-blue);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: var(--breakpoint-mobile)) {
    /* Add mobile-specific styles here */
  }

  .text-primary {
    color: var(--color-primary-orange);
  }

  .bg-primary {
    background-color: var(--color-primary-orange);
  }

  .lightbox-background {
    background-color: var(--color-black-75);
  }
`;
