import * as React from "react";

interface ThemeStyle {
    primary: {
        backgroundColor: string,
        color: string
    },
    secondary: {
        backgroundColor: string,
        color: string
    }
}

const themeStyle = {
    primary: {
        backgroundColor: 'blue',
        color: 'white',
    },
    secondary: {
        backgroundColor: 'lightgrey',
        color: 'black',
    },
};

export const Theme = ({children}: {children: (style: ThemeStyle) => any}) => {
    return (
        <React.Fragment>
            {children(themeStyle)}
        </React.Fragment>
    );
};