import { blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const bgColor1: string = '#0a0a0a';

export const useStyles = makeStyles( ( theme: Theme ) =>
    createStyles( {
        main: {
            pointerEvents: 'none',
            boxSizing: 'border-box',
            '&:focus': {
                border: '1px solid grey',
            }
        },
    } ) )