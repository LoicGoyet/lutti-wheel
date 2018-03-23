import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        background-color: #292044;
        color: #fff;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;
