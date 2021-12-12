function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
}

export {insertAt}