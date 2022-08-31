const objectConverter = {
    arrayToMap(array) {
        return new Map(array.map((element, index) => [index, element]));
    },
    arrayToSet(array) {
        return new Set(array);
    },
    setToMap(set) {
        return new Map(Array.from(set).map((element, index) => [index, element]));
    },
    setToArray(set) {
        return Array.from(set);
    },
    mapToArray(map) {
        const mapArray = [];
        map.forEach(value => mapArray.push(value));
        return mapArray;
    },
    mapToSet(map) {
        const setArray = [];
        map.forEach(value => setArray.push(value));
        return new Set(setArray);
    }
}

export default objectConverter;
