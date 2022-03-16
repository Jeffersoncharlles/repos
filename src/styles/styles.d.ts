import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        color: {
            primary: string;
            primary2: string;
            secondary: string;
            secondary2: string;
            tertiary: string;

            white: string;
            black: string;
            gray: string;

            success: string;
            info: string;
            warning: string;
        }
    }
}