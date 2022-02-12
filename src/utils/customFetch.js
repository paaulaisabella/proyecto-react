let ok = true

export const customFetch = (items, timeout) => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(ok) {
            resolve (items);
        } else {
            reject('KO');
        }
    },timeout);
});
}