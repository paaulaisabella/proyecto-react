let ok = true

export const getItem = (items, timeout) => {
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