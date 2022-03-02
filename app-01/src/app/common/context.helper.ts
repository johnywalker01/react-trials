import React from "react";

export type ButtonActionContextType = {
    save: number,
    run: number,
    preview: number,
    properties?: number,
}
/**
 * For performing Common-ICON Actions like Save, Preview, Deploy, etc.
 */
export const ButtonActionContext = React.createContext<ButtonActionContextType>( null );

export type ThemeContextType = {
    color: any,
    // value: any,
}

export const ThemeContext = React.createContext<ThemeContextType>( null );

export type BreadCrumbContextType = {
    appDefName: string;
    uiDefName: string;
    clearAll: number;
}
export const BreadCrumbContext = React.createContext<BreadCrumbContextType>( null );
