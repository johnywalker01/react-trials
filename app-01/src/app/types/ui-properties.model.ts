import { ElemTypeEnum } from "app/enums/wp-common.enum";

export interface IBaseControl {
    id: string;
    code: string;
    name: string;
    /**
     * icon source
     */
    src: string;
    /**
     * UI Control Type
     */
    componentType: ElemTypeEnum;
}

export interface IControlItem extends IBaseControl {
    value: string;
    dataType: string;
    posX: number;
    posY: number;
    width: number;
    height: number;
    checked?: boolean;
    fileList?: FileList;
    icon?: string;
    link?: string;
    options?: any;
    captions?: string;
    children?: IControlItem[];
    outputKeys?: string[];
    table?: string;
}

export class ControlItemModel implements IControlItem {

    id: string = '';
    code: string = '';
    name: string = '';
    src: string = '';
    value: string = '';
    dataType: string = ''; // examples are TEXT / BOOL
    componentType: ElemTypeEnum = ElemTypeEnum.LABEL;
    posX: number = 0;
    posY: number = 0;
    width: number = 0;
    height: number = 0;
    component?: ElemTypeEnum = ElemTypeEnum.LABEL;
    checked?: boolean = false;
    fileList?: FileList;
    icon?: string = '';
    link?: string = '';
    captions?: string = '';
    children?: IControlItem[] = [];
    outputKeys?: string[] = [];
    table?: string = "";
    options?: any = {};

    setValues ( obj: any ) {
        try {
            this.id = ( obj[ 'id' ] ) ? obj[ 'id' ] : '';
            this.code = ( obj[ 'code' ] ) ? obj[ 'code' ] : '';
            this.name = ( obj[ 'name' ] ) ? obj[ 'name' ] : '';
            this.value = ( obj[ 'data' ] ) ? obj[ 'data' ] : '';
            // this.nextUi = ( obj[ 'nextUi' ] ) ? obj[ 'nextUi' ] : '';
            this.dataType = ( obj[ 'dataType' ] ) ? obj[ 'dataType' ] : '';
            this.componentType = ( obj[ 'componentType' ] ) ? ( obj[ 'componentType' ] as ElemTypeEnum ) : ElemTypeEnum.LABEL;
            this.posX = ( obj[ 'props' ] && obj[ 'props' ][ 'left' ] ) ? obj[ 'props' ][ 'left' ] : 0;
            this.posY = ( obj[ 'props' ] && obj[ 'props' ][ 'top' ] ) ? obj[ 'props' ][ 'top' ] : 0;
            this.width = ( obj[ 'props' ] && obj[ 'props' ][ 'width' ] ) ? obj[ 'props' ][ 'width' ] : 0;
            this.height = ( obj[ 'props' ] && obj[ 'props' ][ 'height' ] ) ? obj[ 'props' ][ 'height' ] : 0;

        } catch ( error ) {
            console.error( 'ControlItemModel value setting', error );
        }
    }

    copyValues ( obj: IControlItem ) {
        this.width = obj.width;
        this.height = obj.height;
        this.id = obj.id;
        this.code = obj.code;
        this.name = obj.name;
        this.value = obj.value;
        this.dataType = obj.dataType;
        this.componentType = obj.componentType;
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.component = obj.componentType;
        this.checked = obj.checked;
        this.fileList = obj.fileList;
        this.icon = obj.icon;
        this.link = obj.link;
    }
}
