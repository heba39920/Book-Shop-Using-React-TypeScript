const MAIN_URL_BASE = "https://upskilling-egypt.com:3007";
const MAIN_URL = `${MAIN_URL_BASE }/api`;
export const URLS ={
    // books
    getAllBooks: `${MAIN_URL}/book`,
    getBook: `${MAIN_URL}/book/:id`,
    // categories
    getAllCategories: `${MAIN_URL}/category`,
    getCategory: `${MAIN_URL}/category/:id`,
    // basket
    getAllItems:`${MAIN_URL}/basket`,
    addItem:`${MAIN_URL}/basket/item`,
    deleteItem:`${MAIN_URL}/basket/item`,
    updateBasket: `${MAIN_URL}/basket/:id`,
    // orders
    createOrder:`${MAIN_URL}/order/:id`,
    getAllOrders: `${MAIN_URL}/order/my`
}