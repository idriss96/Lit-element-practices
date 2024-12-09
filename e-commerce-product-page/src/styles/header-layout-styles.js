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
	height: 5rem;
	border-bottom: 1px solid var(--color-grayish-blue);
  }

  .navigation {
	display: flex;
	gap : 3rem;
	align-items: center;
	height: 100%;
  }

  .links {
	display: flex;
	gap: 1.5rem;
  }


  .link {
	height: 5rem;
	display: flex;
	align-items: center;
	color : var(--color-dark-grayish-blue);
  }

  .active {
	border-bottom: 5px solid var(--color-primary-orange);
	color : var(--color-very-dark-blue);
  }

  .status {
	display:flex;
	align-items: center;
	gap: 2rem;
  }

  .avatar {
	width: 2.5rem;
	border: 3px solid var(--color-white);
	border-radius: 50%;
  }

  .avatar:hover {
	border: 3px solid var(--color-primary-orange);
  }
`;
