import clone from 'just-clone';

/**
 * deep clone objects and arrays
 * @param arg 
 * @returns 
 */
export const deepClone = <T extends object>( arg: T ) => {
    if ( !arg ) return;

    return clone( arg );
}