import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( theme => ( {
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    dropBox: {
        flex: '1 0 auto',
        background: '#f3f0f0',
    }

} ),
);