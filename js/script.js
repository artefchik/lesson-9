function create(name) {
    return function (number) {
        return `http://myshop.ru/${name}/${number}`;
    };
}
