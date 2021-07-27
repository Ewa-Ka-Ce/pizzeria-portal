import CartProduct from './CartProduct.js';
import {settings, select, classNames, templates} from '../settings.js';
import utils from '../utils.js';

class Cart {
  constructor(element) {
    const thisCart = this;

    thisCart.products = [];
    thisCart.getElements(element);
    thisCart.initActions();
  }

  getElements(element) {
    const thisCart = this;

    thisCart.dom = {};

    thisCart.dom.wrapper = element;
    thisCart.dom.toggleTrigger = thisCart.dom.wrapper.querySelector(select.cart.toggleTrigger);
    thisCart.dom.productList = thisCart.dom.wrapper.querySelector(select.cart.productList);
    thisCart.dom.deliveryFee = thisCart.dom.wrapper.querySelector(select.cart.deliveryFee);
    thisCart.dom.subTotalPrice = thisCart.dom.wrapper.querySelector(select.cart.subtotalPrice);
    thisCart.dom.totalPrice = thisCart.dom.wrapper.querySelectorAll(select.cart.totalPrice);
    thisCart.dom.totalNumber = thisCart.dom.wrapper.querySelector(select.cart.totalNumber);
    thisCart.dom.form = thisCart.dom.wrapper.querySelector(select.cart.form);
    thisCart.dom.phone = thisCart.dom.wrapper.querySelector(select.cart.phone);
    thisCart.dom.address = thisCart.dom.wrapper.querySelector(select.cart.address);
  }

  initActions() {
    const thisCart = this;

    thisCart.dom.toggleTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      thisCart.dom.wrapper.classList.toggle(classNames.cart.wrapperActive);
    });
    thisCart.dom.productList.addEventListener('updated', function () {
      thisCart.update();
    });
    thisCart.dom.productList.addEventListener('remove', function () {
      thisCart.remove(event.detail.cartProduct);
    });
    thisCart.dom.form.addEventListener('submit', function (event) {
      event.preventDefault();
      thisCart.sendOrder();
    });
  }

  add(menuProduct) {
    const thisCart = this;

    const generatedHTML = templates.cartProduct(menuProduct);
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    thisCart.dom.productList.appendChild(generatedDOM);
    thisCart.products.push(new CartProduct(menuProduct, generatedDOM));
    thisCart.update();
  }

  update() {
    const thisCart = this;

    thisCart.deliveryFee = settings.cart.defaultDeliveryFee;
    thisCart.totalNumber = 0;
    thisCart.subTotalPrice = 0;

    for (let product of thisCart.products) {
      thisCart.totalNumber += product.amount;
      thisCart.subTotalPrice += product.price;
    }

    thisCart.totalPrice = thisCart.subTotalPrice + thisCart.deliveryFee;

    if(thisCart.subTotalPrice !== 0){
      thisCart.dom.deliveryFee.innerHTML = thisCart.deliveryFee;
      for(let totalPrice of thisCart.dom.totalPrice){
        totalPrice.innerHTML = thisCart.totalPrice;
      }
    } else{
      thisCart.dom.deliveryFee.innerHTML = 0;
      for(let totalPrice of thisCart.dom.totalPrice){
        totalPrice.innerHTML = 0;
      }
    }

    console.log('deliveryFee:', thisCart.deliveryFee);
    console.log('totalNumber:', thisCart.totalNumber);
    console.log('subTotalPrice:', thisCart.subTotalPrice);
    console.log('totalPrice:', thisCart.totalPrice);

    thisCart.dom.subTotalPrice.innerHTML = thisCart.subTotalPrice;
    thisCart.dom.totalNumber.innerHTML = thisCart.totalNumber;
  }

  remove(cartProduct) {
    const thisCart = this;

    const indexOfProduct = thisCart.products.indexOf(cartProduct);
    thisCart.products.splice(indexOfProduct, 1);

    cartProduct.dom.wrapper.remove();

    thisCart.update();
    console.log('delete', thisCart.products);
  }
  sendOrder() {
    const thisCart = this;

    const url = settings.db.url + '/' + settings.db.orders;

    const payload = {
      address: thisCart.dom.address.value,
      phone: thisCart.dom.phone.value,
      deliveryFee: thisCart.deliveryFee,
      subTotalPrice: thisCart.subTotalPrice,
      totalPrice: thisCart.totalPrice,
      totalNumber: thisCart.totalNumber,
      products: []
    };

    for (let prod of thisCart.products) {
      payload.products.push(prod.getData());
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options);

    console.log(payload);
    return payload;

  }
}

export default Cart; 
