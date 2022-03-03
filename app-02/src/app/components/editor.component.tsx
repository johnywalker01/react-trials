import React from 'react';
import Editor from '@monaco-editor/react';

type FcProps = {
    customProp?: any;
};

export const MyEditor: React.FC<FcProps> = ( props ) => {
  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      <div>
        <h1>Editor</h1>
      </div>
      <div style={ { flex: 1 } }>
        <Editor
          height="50vh"
          theme='vs-dark'
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
    </div>
  );
};
