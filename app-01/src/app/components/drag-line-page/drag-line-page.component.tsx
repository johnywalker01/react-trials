import { DeepCloneArray, getRandomNumber, GetSecondsFromEpochUTC } from 'app/common/common-methods';
import { ControlItemModel, IControlItem } from 'app/types/ui-properties.model';
import { Button, Checkbox, TextField } from "@material-ui/core";
import React, { useRef, useState, useEffect } from 'react';
import { DraggableChild, DraggableContainer } from 'react-dragline';
import { DraggableData } from 'react-draggable';
import UiControl from '../base-ui-control/base-ui-control.component';
import * as Styled from './drag-line-page.style';
import { ElemTypeEnum } from 'app/enums/wp-common.enum';

type FCProps = {
  customProp?: any;
};

const DragLineMain: React.FC<FCProps> = ( props ) => {
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

  let refDcc = useRef( null );

  useEffect( () => {
    loadItems();
  }, [] );

  const loadItems = () => {
    let data: IControlItem[] = [];
    let m = new ControlItemModel();
    m.id = '11';
    m.code = "abc1";
    m.name = "Button";
    m.posX = 60;
    m.posY = 100;
    m.width = 150;
    m.height = 50;
    m.componentType = ElemTypeEnum.BUTTON;
    data.push( m );

    m = new ControlItemModel();
    m.id = '22';
    m.code = "abc2";
    m.name = "Check-Box 1";
    m.posX = 60;
    m.posY = 250;
    m.width = 140;
    m.height = 40;
    m.componentType = ElemTypeEnum.CHECKBOX;
    data.push( m );

    setControls( data );
  }

  const onStartDragDc = ( itemId: string, d: DraggableData ) => {
    refDragIdent.current = 0;

  }

  const onDragDc = ( itemId: string, d: DraggableData ) => {
    refDragIdent.current = 1;

  }

  const onStopDragDc = ( event: React.MouseEvent, itemId: string, d: DraggableData ) => {
    let replica = DeepCloneArray( controls );
    let controlFiltered = replica.filter( control => control.id === itemId );
    if ( controlFiltered && controlFiltered.length ) {
      let elem = controlFiltered[ 0 ];
      elem.posX = Math.trunc( d.x );
      elem.posY = Math.trunc( d.y );

      setControls( replica );
    }

    checkEdge( itemId );
  }

  const checkEdge = ( itemId: string ) => {
    let parentWidth = ( refDcc.current as HTMLDivElement ).clientWidth;
    let parentHeight = ( refDcc.current as HTMLDivElement ).clientHeight;
    console.log( { parentWidth, parentHeight } );

    let fruits = controls.filter( item => item.id == itemId );
    if ( fruits.length ) {
      let seed = fruits[ 0 ];
      console.log( 'x+w ', ( seed.posX + seed.width ), 'y+h ', ( seed.posY + seed.height ) );
      if ( ( seed.posX + seed.width ) >= ( parentWidth - 10 ) ) {
        let nw = ( refDcc.current as HTMLDivElement ).clientWidth + ( seed.width );
        console.log( 'new width', nw );
        ( refDcc.current as HTMLDivElement ).style.width = ( nw ) + 'px';

      }
      if ( ( seed.posY + seed.height ) >= ( parentHeight - 10 ) ) {
        let nh = ( refDcc.current as HTMLDivElement ).clientHeight + ( seed.height );
        console.log( 'new height', nh );
        ( refDcc.current as HTMLDivElement ).style.height = ( nh ) + 'px';

      }
    }
  }

  const onClickOfUiItem = ( e: any, uiItem: IControlItem ) => {
    if ( refDragIdent.current == 1 ) {
      // console.log( 'drag occured' );
    } else {
      console.log( 'considering the click happend' );

    }
  }

  const handleBtnClick = () => {
    let replica = DeepCloneArray( controls );

    let theItem = new ControlItemModel();

    theItem.copyValues( replica[ 0 ] );
    theItem.posX = getRandomNumber( 100, 1001 );
    theItem.posY = 300;

    replica.splice( 0, 1, theItem );

    console.log( theItem.posX, theItem.posY );


    setControls( replica );

  }

  return (
    <div className={ classes.root }>
      <div >
        <Button
          variant="contained"
          color="primary" onClick={ handleBtnClick } >
          Random
        </Button>
      </div>

      <div ref={ refDcc } className={ classes.dropBox }>

        <DraggableContainer
          style={ {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'auto',
          } }>
          { ( controls.length )
            ? controls.map( ( item, index ) => (
              <DraggableChild
                key={ index + '-dc-' + item.posX + item.posY + item.id }
                defaultPosition={ { x: item.posX, y: item.posY } }
                onDrag={ ( e, d ) => onDragDc( item.id, d ) }
                onStart={ ( e, d ) => onStartDragDc( item.id, d ) }
                onStop={ ( e, d ) => onStopDragDc( e, item.id, d ) }
              >
                <div style={ {
                  top: item.posY,
                  left: item.posX,
                  width: item.width,
                  height: item.height,
                  cursor: "move",
                  zIndex: 0,
                } }
                  onClick={ ( e ) => onClickOfUiItem( e, item ) }
                >
                  <UiControl uiControl={ item } />
                </div>
              </DraggableChild>
            ) )
            :
            <React.Fragment></React.Fragment>
          }
        </DraggableContainer>
      </div>
    </div>
  );
};

export default DragLineMain;