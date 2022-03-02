import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { ElemTypeEnum } from "app/enums/wp-common.enum";
import { IControlItem } from 'app/types/ui-properties.model';
import React from 'react';
import * as Styled from './base-ui-control.style';


type CustomProps = {
  uiControl: IControlItem;
};

/**
 * Base UI Control component. This renders all the components; like TextBox, Button, CheckBox, etc.
 * @param props 
 * @returns 
 */
const UiControl: React.FC<CustomProps> = ( props ) => {
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
          label={ props.uiControl.name }
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          style={ { height: props.uiControl.height } }
        />
      );
    }
    else if ( elem.componentType === ElemTypeEnum.CHECKBOX ) {
      return (
        <FormControlLabel
          control={ <Checkbox checked={ props.uiControl.checked } name={ props.uiControl.name } /> }
          label={ props.uiControl.name }
        />
      );
    }
    else if ( elem.componentType === ElemTypeEnum.BUTTON ) {
      return (
        <Button variant="contained" color="primary" style={ {
          width: props.uiControl.width,
          height: props.uiControl.height
        } }>
          { props.uiControl.name }
        </Button>
      );
    }
    // console.log( elem.componentType );
  }


  return (
    <div className={ classes.main }
      style={ { width: props.uiControl.width, height: props.uiControl.height } }>
      { renderControl( props.uiControl ) }
    </div>

  );
};

export default UiControl;
