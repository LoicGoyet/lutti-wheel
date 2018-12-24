import { injectGlobal } from 'styled-components';
import OpenSansMedium from '../fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenSansBold from '../fonts/Open_Sans/OpenSans-Bold.ttf';

injectGlobal`
    @font-face {
        font-family: 'Open Sans';
        src: url('${OpenSansMedium}');
        font-weight: 400;
    }
    
    @font-face {
        font-family: 'Open Sans';
        src: url('${OpenSansBold}');
        font-weight: 700;
    }
    
    body {
        margin: 0;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;
