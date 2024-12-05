import { css } from "lit";

export const headerStyles = css`
  ul {
    list-style-type: none;
	padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .header {
	display: flex;
	justify-content: space-between;
	align-items: center;
  }

  .navigation {
	display: flex;
	gap : 3rem;
	align-items: center;
  }

  .links {
	display: flex;
	gap: 1.5rem
  }

  .status {
	display:flex;
	align-items: center;
	gap: 2rem;
  }

  .avatar {
	width: 2.5rem;
  }
`;
