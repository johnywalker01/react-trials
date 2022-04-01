import { Box, Button, Fade, SelectChangeEvent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { getAxiosData } from 'app/api/axios-client';
import { DataModel, IData } from 'app/datatypes/common';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { NodeFetch } from './nodejs-fetch.component';

type FcProps = {
  customProp?: any;
};

const fetchUrl = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

export const BarComp: React.FC<FcProps> = ( props ) => {
  const [checked, setChecked] = React.useState( false );
  const [users, setUsers] = useState<string[]>( [] );
  const [items, setItems] = useState<IData[]>( [] );
  const [color, setColor] = React.useState( '' );

  const handleAction = () => {
    fetchData( fetchUrl )
  }

  const fetchData = async ( url: string ) => {
    try {
      setChecked( ( prev ) => !prev );
      console.log( '1111' );

      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch( url );
      console.log( '2222' );
      if ( !response.ok ) {
        console.log( '2222333' );
        throw new Error( `HTTP error: ${response.status}` );
      }
      setChecked( ( prev ) => !prev );
      console.log( '333' );
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      console.log( { json } );

      let names = [];
      for ( const item of json ) {
        names.push( item.name );
      }
      setUsers( names );
    }
    catch ( error ) {
      console.error( `Could not get products: ${error}` );
    }
  }

  const handleButtonClick = async () => {
    getData();
  }

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

  const handleFetch = async () => {
    getData( color );
  }

  const handleChange = ( event: SelectChangeEvent ) => {
    setColor( event.target.value );
  };


  const icon = (
    <Box sx={ { width: 22, height: 22 } }>
      <CircularProgress
        size={ 20 }
        sx={ {
          color: green[500],
        } }
      />
    </Box>
  );

  return (

    <div style={ { display: 'flex', flexDirection: 'column' } }>
      <div>
        <h1>Async Await Playground</h1>
      </div>

      <div style={ { display: 'inline-block', margin: '5px auto' } }>
        <Button variant="outlined" onClick={ handleAction }>Fetch Items</Button>
        <Fade in={ checked }>{ icon }</Fade>
      </div>

      <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, gap: 10 } }>
        { users.map( ( user, index ) => (
          <span key={ user + '-0-' + index }>
            { user }
          </span>
        ) ) }
      </div>
      <NodeFetch />
    </div>
  );
};
