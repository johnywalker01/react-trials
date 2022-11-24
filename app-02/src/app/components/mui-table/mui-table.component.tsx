import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { getTimeSinceEpochUTC } from 'app/shared/common';
import { deepClone } from 'app/utils/shared';
// import clone from 'just-clone';

type FcProps = {
  customProp?: any;
};

function createData(id: string, name: string, value: string, deleteable: boolean) {
  return { id, name, value, deleteable };
}

export const MuiTable: React.FC<FcProps> = (props) => {
  const [rows, setRows] = React.useState([createData(getTimeSinceEpochUTC(true).toString(), '', '', true)]);

  const handleCreateRow = () => {
    const replica = deepClone(rows);
    replica.push(createData(getTimeSinceEpochUTC(true).toString(), '', '', true));
    setRows(replica);
  };
  const handleDeleteRow = (rowID: string) => {
    const replica = deepClone(rows);
    let filtered = replica.filter((row) => (row.id! = rowID));
    if (filtered.length == 0 || rows.length == 1) return;

    setRows(filtered);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, columnType: string, rowID: string) => {
    const replica = deepClone(rows);
    let filtered = replica.filter((row) => row.id == rowID);
    if (filtered.length == 0) return;

    try {
      filtered[0][columnType] = event.target.value;
      setRows(replica);
    } catch (err) {
      console.log('error ; no arg type', err);
    }
  };

  // console.log( { rows } );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ padding: '5px', width: '28px' }}>
              <IconButton aria-label="delete" size="small" color="success" onClick={handleCreateRow}>
                <AddIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell sx={{ minWidth: '130px' }}>Name</TableCell>
            <TableCell sx={{ minWidth: '130px' }}>Value</TableCell>
            <TableCell align="center" sx={{ minWidth: '60px' }}>
              ...
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index + 'tr--' + row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell> </TableCell>
              <TableCell>
                <TextField variant="standard" size="small" value={row.name} onChange={(e) => handleTextChange(e, 'name', row.id)} />
              </TableCell>
              <TableCell>
                <TextField variant="standard" size="small" value={row.value} onChange={(e) => handleTextChange(e, 'value', row.id)} />
              </TableCell>
              <TableCell align="center">
                {row.deleteable ? (
                  <IconButton aria-label="delete" size="small" onClick={() => handleDeleteRow(row.id)}>
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                ) : (
                  <></>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
