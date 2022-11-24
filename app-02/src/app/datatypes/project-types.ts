export const RouteLink = {
  empty: '*',
  root: '/',
  topics: '/topics',
  nested: '/*',
  topicId: ':topicId',
  shelf: '/shelf',
  fancy: '/fancy',
  fancy2: '/fancy2',
  workShop: '/workShop',
  i18n: '/i18n',
  table: '/table',
  bar: '/bar',
  editor: '/editor',
};

export enum ACTIONS {
  ADD_TODO = 'addTodo',
  TOGGLE_TODO = 'toggleTodo',
  DELETE_TODO = 'deleteTodo',
}

export type dispatchType = {
  type: ACTIONS.ADD_TODO | ACTIONS.TOGGLE_TODO | ACTIONS.DELETE_TODO;
  payload: { id?: string; name?: string; complete?: boolean };
};

export interface IDispatch {
  id: string;
  name: string;
  complete: boolean;
}

export interface IData {
  id: string;
  item: string;
}
export class DataModel implements IData {
  id: string = '';
  item: string = '';

  setValues(obj: any) {
    if (!obj) return;

    if (obj?.id) this.id = obj.id;
    if (obj?.item) this.item = obj.item;
  }
}
export type FilmOptionType = {
  title: string;
  year: number;
};
