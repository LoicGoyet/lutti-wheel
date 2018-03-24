import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        color: #fff;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;
