import { Stack, Button, Typography } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { Board1 } from './board-1.component';
import { Board2 } from './board-2.component';

type FcProps = {
    customProp?: any;
};

export const WorkShop: React.FC<FcProps> = ( props ) => {
    return (
        <div>
            <h1>useReducer Example</h1>
            <hr />
            <Stack direction="column" spacing={ 2 }>
                <Board1 />
                <Board2 />
            </Stack>
        </div>
    );
}