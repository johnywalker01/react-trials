import { createGenerateClassName, makeStyles } from '@material-ui/core/styles';

const backgroundColor: string = '#e2e0e0';
export const useStyles = makeStyles( theme => ( {
    root: {
        color: theme.palette.getContrastText( backgroundColor ),
        backgroundColor: backgroundColor,
        height: '100vh',
        width: '100vw',
    },

} ),
);