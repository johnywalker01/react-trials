import { Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";

type FcProps = {
    customProp?: any;
};

export const Language1: React.FC<FcProps> = ( props ) => {
    const { t } = useTranslation();


    return (
        <div>
            <h3>very simple one</h3>
            <Stack direction="row" spacing={ 2 }>
                { t( 'Welcome to React' ) }
            </Stack>
        </div>
    );
}