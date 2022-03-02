import React, { useEffect } from 'react';
import DragLineMain from '../drag-line-page/drag-line-page.component';
import RndMain from '../rnd-page/rnd-page.component';
import * as Styled from './base-page.style';

type FCProps = {
  customProp?: any;
};

const BasePage: React.FC<FCProps> = ( props ) => {
  const classes = Styled.useStyles();

  useEffect( () => {
    testAnagramM2( 'boss', 'moss' )
  }, [] );

  const testAnagramM2 = ( str1: string, str2: string ) => {
    let pStr1 = str1.split( '' ).sort().join();
    let pStr2 = str2.split( '' ).sort().join();

    console.log( ( pStr1 == pStr2 ) ? 'ANAGRAM' : 'DIFFERENT' );
  }

  return (
    <div className={ classes.root }>
      <DragLineMain />
      {/* <RndMain /> */ }
    </div>
  );
};

export default BasePage;