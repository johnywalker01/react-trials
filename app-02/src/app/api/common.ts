import LANGUAGE_JSON from 'src/i18n/locales/translation-en.json';

const data: any[] = [
  {
    id: 'typescript',
    name: 'Typescript',
    href: 'typescript',
    desc: 'Typescript is superset of Javascript Programming Language',
  },

  {
    id: 'javascript',
    name: 'Javascript',
    href: 'javascript',
    desc: 'Browser understands only Javascript',
  },

  {
    id: 'java',
    name: 'Java',
    href: 'java',
    desc: 'Java is powerful programming language widely used',
  },
];

export const getTopics = () => {
  return data;
};

export const getTopic = ( topicId: string ) => {
  if ( !topicId ) return data[0];

  return data.find( ( item ) => item.id == topicId );
};

export const getLangKey = () => {
  return Object.keys( LANGUAGE_JSON );
}

export const getTimeSinceEpochUTC = ( isMilli: boolean = false ): number => {
  const now = new Date();

  return ( isMilli )
    ?
    now.getTime() + ( now.getTimezoneOffset() * 60 * 1000 )
    :
    Math.round( now.getTime() + ( now.getTimezoneOffset() * 60 * 1000 ) / 1000 );
}
