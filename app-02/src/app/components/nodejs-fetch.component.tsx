import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { getAxiosData } from 'app/api/axios-client';
import { DataModel, IData } from 'app/datatypes/project-types';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';

type FcProps = {
    customProp?: any;
};


export const NodeFetch: React.FC<FcProps> = ( props ) => {
    const [items, setItems] = useState<IData[]>( [] );
    const [color, setColor] = useState( '' );

    const getData = ( type?: string ) => {
        let data = {};
        if ( type ) {

            data = { ...data, 'color': type };
        }

        getAxiosData( 'ingredients', data )
            .then( function ( response ) {
                // handle success
                // console.log( response );
                processResponse( response );
            } )
            .catch( function ( error ) {
                // handle error
                console.log( error );
            } );
    }

    const processResponse = ( response: AxiosResponse<any> ) => {
        if ( response.data?.results?.data ) {
            let groceries: IData[] = [];
            const itemList = response.data?.results?.data;
            for ( const item of itemList ) {
                // console.log( item );
                let ima = new DataModel();
                ima.setValues( item );

                groceries.push( ima );
            }
            setItems( groceries );
        }
    }

    const handleFetch = () => {
        getData( color );
    }

    const handleChange = ( event: SelectChangeEvent ) => {
        setColor( event.target.value );
    };

    return (
        <>
            <Divider variant='fullWidth' orientation='horizontal' />
            <div style={ { display: 'inline-block', margin: '5px auto' } }>Load data from NodeJS server</div>
            <Divider variant='fullWidth' orientation='horizontal' />
            <div style={ { display: 'inline-block', margin: '5px auto' } }>
                <Box >
                    <FormControl sx={ { m: 1, minWidth: 120 } } size='small' variant='outlined'>
                        <InputLabel >Color</InputLabel>
                        <Select
                            label="Color"
                            value={ color }
                            onChange={ handleChange }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={ 'white' }>White</MenuItem>
                            <MenuItem value={ 'red' }>Red</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" size='small' onClick={ handleFetch }>Fetch</Button>
                </Box>
                <Stack direction='row' spacing={ 1 }
                    divider={ <Divider orientation="vertical" flexItem /> }>
                    { items.map( item => (
                        <span key={ item.id + 'key' }>{ item.item }</span>
                    ) ) }
                </Stack>
            </div>
        </>
    );
};
