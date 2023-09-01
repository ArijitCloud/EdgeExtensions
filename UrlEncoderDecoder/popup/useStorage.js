/**
 * Save the item in storage with given key and value
 */
export function saveInStorage(key, value){
    const stringValue=JSON.stringify(value);
    window.localStorage.setItem(key, stringValue);
}

/**
 * Get the item from storage with given key
 */
export function getFromStorage(key){
    const value=window.localStorage.getItem(key)
   return value? JSON.parse(value):undefined;
}

/**
 * Delete the item from storage with given key
 */
export function removeFromStorage(key){
    window.localStorage.removeItem(key);
}