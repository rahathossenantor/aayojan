const getSavedData = () => {
    const savedData = window.localStorage.getItem("cart");
    if (savedData) {
        return JSON.parse(savedData);
    }
    return [];
};

const saveItemToLocalStorage = (item) => {
    const items = getSavedData();
    items.push(item);
    window.localStorage.setItem("cart", JSON.stringify(items));
};

export {getSavedData, saveItemToLocalStorage};
