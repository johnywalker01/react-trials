import { Button } from "@material-ui/core";
import { DeepCloneArray, getRandomNumber } from 'app/common/common-methods';
import { ElemTypeEnum } from 'app/enums/wp-common.enum';
import { ControlItemModel, IControlItem } from 'app/types/ui-properties.model';
import React, { useEffect, useRef, useState } from 'react';
import { DraggableData } from 'react-draggable';
import CustomRndUiControl from '../custom-rnd/custom-rnd.component';
import * as Styled from './rnd-page.style';

type FCProps = {
  customProp?: any;
};

const RndMain: React.FC<FCProps> = ( props ) => {
  const classes = Styled.useStyles();

  const [ controls, setControls ] = useState<IControlItem[]>( [] );// right panel controls

  /**
     * set 0 - when item starts drag
     * 
     * set 1 - when item is on drag
     * 
     * By this, we can differentiate click & drag
     */
  let refDragIdent = useRef( 0 );

  useEffect( () => {
    loadItems();
  }, [] );

  const loadItems = () => {
    let data: IControlItem[] = [];
    let m = new ControlItemModel();
    m.id = "1";
    m.code = "abc1";
    m.name = "Button";
    m.posX = getRandomNumber( 10, 400 );
    m.posY = getRandomNumber( 10, 400 );
    m.width = 150;
    m.height = 50;
    m.componentType = ElemTypeEnum.BUTTON;
    data.push( m );

    m = new ControlItemModel();
    m.id = "2";
    m.code = "abc2";
    m.name = "Text 1";
    m.posX = getRandomNumber( 10, 400 );
    m.posY = getRandomNumber( 10, 400 );
    m.width = 250;
    m.height = 40;
    m.componentType = ElemTypeEnum.INPUT_TEXT;
    data.push( m );


    setControls( data );

  }

  const onStartDragDc = ( itemId: string, d: DraggableData ) => {
    refDragIdent.current = 0;
  }

  const onDragDc = ( itemId: string, d: DraggableData ) => {
    refDragIdent.current = 1;
  }

  const onStopDragDc = ( itemId: string, d: DraggableData ) => {
    let replica = DeepCloneArray( controls );
    let controlFiltered = replica.filter( control => control.id === itemId );
    if ( controlFiltered && controlFiltered.length ) {
      let elem = controlFiltered[ 0 ];
      elem.posX = Math.trunc( d.x );
      elem.posY = Math.trunc( d.y );

      setControls( replica );
    }
  }

  const onClickOfUiItem = ( e: any, uiItem: IControlItem ) => {
    if ( refDragIdent.current == 1 ) {
      // console.log( 'drag occured; so dont show properties-icon popover menu' );
    } else {
    }
  }

  const handleSaveBtnClick = () => {
    let arr = [];
    controls.forEach( element => {
      arr.push( { 'x': element.posX, 'y': element.posY } );
    } );
    console.log( { arr } );
  }
  const handleRandomBtnClick = () => {
    rearrageControl();
    console.log( 'rearrageControl' );
  }

  const rearrageControl = () => {
    let replica = DeepCloneArray( controls );

    const theItemList = replica.filter( control => control.id == '1' );
    let theItem = new ControlItemModel();
    if ( theItemList.length ) {
      setControls( [] );
      // console.log( { data } );
      theItem.copyValues( theItemList[ 0 ] );
      theItem.posX = getRandomNumber( 10, 400 );
      theItem.posY = getRandomNumber( 10, 400 );
    }

    const controlFiltered = replica.filter( control => control.id != '1' );
    if ( controlFiltered.length ) {
      controlFiltered.push( theItem );

      setControls( controlFiltered );
      console.log( theItem.posX, theItem.posY );
    }
  }

  console.log( 'len - ', controls.length );

  return (
    <div className={ classes.root }>
      <div style={ { flex: 1, display: 'flex', justifyContent: 'center' } } >
        <Button
          variant="contained"
          color="primary" onClick={ handleRandomBtnClick } >
          Random
        </Button>
        <Button
          variant="contained"
          color="primary" onClick={ handleSaveBtnClick } >
          Save
        </Button>
      </div>

      <div
        style={ {
          position: 'relative',
          width: '100%',
          height: '100%',
        } }>
        { ( controls.length )
          ? controls.map( ( item, index ) => (
            <CustomRndUiControl key={ 'rnd-' + index + item.id } uiControl={ item } />
          ) )
          :
          <React.Fragment></React.Fragment>
        }
      </div>
    </div>
  );
};

export default RndMain;