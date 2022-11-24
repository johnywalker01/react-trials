import Autocomplete from '@mui/material/Autocomplete';
import { brown, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const Boty = styled(Autocomplete)(({ theme }) => ({
  '&:.MuiAutocomplete-root': {
    color: theme.palette.getContrastText(brown[900]),
    // background: brown[900],
    border: '1px solid red',
    borderRadius: '5px',
    '&:hover': {
      borderColor: brown[300],
    },
  },
  '&:.MuiAutocomplete-clearIndicator': {
    color: green[500],
  },
}));
