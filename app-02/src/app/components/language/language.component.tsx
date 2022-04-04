import { Stack, Button, Typography } from '@mui/material';
import React, { useReducer, useState } from 'react';
import { Language1 } from './language-1.component';
import { Language2 } from './language-2.component';

type FcProps = {
    customProp?: any;
};

export const MultiLingual: React.FC<FcProps> = ( props ) => {
    return (
        <div>
            <h1>Language Example (usage of i18n) </h1>
            <hr />
            <Stack direction="column" spacing={ 2 }>
                <Language1 />
                <Language2 />
            </Stack>
        </div>
    );
}