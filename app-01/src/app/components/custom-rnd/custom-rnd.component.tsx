import { Button, Checkbox, TextField } from "@material-ui/core";
import { ElemTypeEnum } from "app/enums/wp-common.enum";
import { IControlItem } from 'app/types/ui-properties.model';
import React from 'react';
import { Rnd } from "react-rnd";
import * as Styled from './custom-rnd.style';


type CustomProps = {
  uiControl: IControlItem;
};

/**
 * Base UI Control component. This renders all the components; like TextBox, Button, CheckBox, etc.
 * @param props 
 * @returns 
 */
const CustomRndUiControl: React.FC<CustomProps> = ( props ) => {
  const classes = Styled.useStyles();

  const renderControl = ( elem: IControlItem ) => {
    // console.log( { elem }, elem.componentType );

    if (
      elem.componentType === ElemTypeEnum.INPUT_TEXT ||
      elem.componentType === ElemTypeEnum.TEXTAREA ||
      elem.componentType === ElemTypeEnum.PASSWORD
    ) {
      return (
        <TextField
          label={ elem.name }
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          style={ { height: elem.height } }
        />
      );
    }
    else if ( elem.componentType === ElemTypeEnum.CHECKBOX ) {
      return (
        <Checkbox aria-label={ elem.name } />
      );
    }
    else if ( elem.componentType === ElemTypeEnum.BUTTON ) {
      return (
        <Button variant="contained" color="primary" style={ {
          width: elem.width,
          height: elem.height
        } }>
          { elem.name }
        </Button>
      );
    }
    // console.log( elem.componentType );
  }


  return (
    <Rnd
      default={ {
        x: props.uiControl.posX,
        y: props.uiControl.posY,
        width: props.uiControl.width,
        height: props.uiControl.height,
      } }
      position={ {
        x: props.uiControl.posX,
        y: props.uiControl.posY,
      } }
    >
      <div className={ classes.main }>

        { renderControl( props.uiControl ) }
      </div>
    </Rnd>

  );
};

export default CustomRndUiControl;
