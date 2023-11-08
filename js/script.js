function create(name) {
    return function (number) {
        return `http://myshop.ru/${name}/${number}`;
    };
}

const orders = [
    {
        fio: 'Ivan',
        tovar: 'phone',
        price: 10000,
        quantity: 2,
    },
    {
        fio: 'Peter',
        tovar: 'usb',
        price: 2300,
        quantity: 5,
    },
    {
        fio: 'Mary',
        tovar: 'connector',
        price: 100,
        quantity: 100,
    },
];

function calcOrder() {
    console.log(`Заказ ${this.tovar} покупателя ${this.fio} составил ${this.price * this.quantity}`);
}

function calcWithDiscount(discount) {
    console.log(
        `Заказ ${this.tovar} покупателя ${this.fio} со скидкой ${discount} составил ${
            this.price * this.quantity - this.price * this.quantity * (discount / 100)
        } `
    );
}

function Menu(...navList) {
    this.navList = navList;
    this.wrapperA = function (array) {
        return this.navList.map((elem, index) => `<a href='${elem}'>${array[index]}</a>`);
    };
}
