/////////////////////////////////
// COMMON METHODS FOR PROJECT  //
/////////////////////////////////
import { WpErrorMessages, WpMessages } from "app/common/string-constants";

/**
 * return color code in hexa-decimal format (eg:- #FF00FF)
 * @param lowerLimit lowest value should be in between 0 and 249
 * @param upperLimit upper value should be in between 250 and 255
 */
export const GetRandomColor = ( lowerLimit: number, upperLimit: number ): string => {
    let r = getRandomArbitrary( lowerLimit, upperLimit );
    let g = getRandomArbitrary( lowerLimit, upperLimit );
    let b = getRandomArbitrary( lowerLimit, upperLimit );
    let colorCode = '#' + decimalToHex( r ) + decimalToHex( g ) + decimalToHex( b );
    return colorCode;
}

const getRandomArbitrary = ( min: number, max: number ): number => {
    let rNum = Math.random() * ( max - min ) + min;
    let colorValue = Math.floor( rNum );

    return colorValue;
}

const decimalToHex = ( c: number ): string => {
    let hex = Math.abs( c ).toString( 16 );
    hex = ( hex.toString().length < 2 ) ? '0' + hex : hex;
    return hex;
}

/**
 * 
 * @param full set true if needed Year, Month, Date with Time
 * @returns 
 */
export const GetTimeIn24Hrs = ( full: boolean = false ): string => {
    const now = new Date();
    const ymd = now.getFullYear() + '' + now.getMonth() + '' + now.getDate();
    const ct = now.getHours() + '' + now.getMinutes() + '' + now.getSeconds();
    // console.log( { currentTime } );

    return ( full ) ? ymd + ct : ct;
}

/**
 * Deep copy of any object; copies the data of input object, not the reference of input object.
 * @param arg 
 * @returns 
 */
export function DeepClone<Type> ( arg: Type ): Type {
    return Object.assign( {}, arg );
}

/**
 * Deep copy of an Array of any Type
 * @param arg 
 * @returns Array of any Type
 */
export function DeepCloneArray<Type> ( arg: Type ): Type {
    return Object.assign( [], arg );
}

/**
 * Return seconds from Epoch, in UTC
 * @param isMilli set true if milliseconds is needed.
 * @returns 
 */
export const GetSecondsFromEpochUTC = ( isMilli: boolean = false ): number => {
    const now = new Date();
    const utcMillisecondsSinceEpoch = now.getTime() + ( now.getTimezoneOffset() * 60 * 1000 );
    const utcSecondsSinceEpoch = Math.round( utcMillisecondsSinceEpoch / 1000 );

    return ( isMilli ) ? utcMillisecondsSinceEpoch : utcSecondsSinceEpoch;
}

export const getRandomNumber = ( min: number, max: number ) => {
    // Returns a random integer from 1 (lower) to 100 (upper):
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}
