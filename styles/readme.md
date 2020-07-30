Global styles are build using [styled-components](https://styled-components.com) library following this pattern:

```jsx static
import * as React from 'react';
import { css } from '../../styles/theme';
import fonts from './fonts';

const main = css`
  ${fonts}

  html {
    color: #000;
  }
`;

export default main;
```
