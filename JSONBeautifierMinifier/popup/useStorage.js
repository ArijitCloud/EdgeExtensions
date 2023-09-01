/**
 * Save the item in storage with given key and value
 */
export function saveInStorage(key, value){
    window.localStorage.setItem(key, value);
}

/**
 * Get the item from storage with given key
 */
export function getFromStorage(key){
   return window.localStorage.getItem(key) || undefined;
}

/**
 * Delete the item from storage with given key
 */
export function removeFromStorage(key){
    window.localStorage.removeItem(key);
}