import { WpProjectService } from "app/services/wp-project.service";
import { IUIItem } from "app/types/ui-properties.model";
import { IAppItemInput } from "app/types/wp-project.model";
import { removeFromLocalStorage, setIntoLocalStorage } from "./common-methods";

export const storeUiDefInCommonPlace = ( uiDef: IUIItem ) => {
    // console.log( { uiDef } );
    if ( uiDef ) {
        WpProjectService.GetInstance().setUserSelectedUIDef( uiDef );
        setIntoLocalStorage( null, uiDef.id );
    } else {
        WpProjectService.GetInstance().setUserSelectedUIDef( null );
        removeFromLocalStorage( false, null, '' );
    }
}

export const storeAppDefInCommonPlace = ( appDef: IAppItemInput ) => {
    // console.log( { uiDef } );
    if ( appDef ) {
        WpProjectService.GetInstance().setUserSelectedAppDef( appDef );
        setIntoLocalStorage( appDef.id );
    } else {
        WpProjectService.GetInstance().setUserSelectedUIDef( null );
        removeFromLocalStorage( false, '' );
    }
}

export const removeAppDefAndUiDefFromCommon = () => {
    WpProjectService.GetInstance().setUserSelectedAppDef( null );
    WpProjectService.GetInstance().setUserSelectedUIDef( null );

    removeFromLocalStorage( true );
}