import products from './products.json';

function get_supermarket_list() {
  return ["Tesco", "Lidl", "Spar"];
}

function get_basket_price_per_supermarket(basket: String[], supermarket: String) {
  let price: number = 0;
  basket.forEach(product => {
    const product_info = products.find(product_info => product_info.name === product);
    if (product_info) {
      const option = product_info.options.find(option => option.supermarket === supermarket);
      if (option) {
        price += option.price;
      }
    }
  });
  return price;
}

function get_minimum_price(name: String) {
  const product = products.find(product => product.name === name);
  if (product) {
    let price: number = product.options.reduce((min, option) => {
      return option.price < min || min == 0 ? option.price : min;
    }, 0);
    return price;
  }
  return null;
}

function get_maximum_price(name: String) {
  const product = products.find(product => product.name === name);
  if (product) {
    let price: number = product.options.reduce((min, option) => {
      return option.price > min ? option.price : min;
    }, 0);
    return price
  }
  return null;
}

function get_unit(name: String) {
  const product = products.find(product => product.name === name);
  if (product) {
    return product.unit;
  }
  return null;
}

function get_price_range(name: String) {
  return [get_minimum_price(name), get_maximum_price(name)];
}

export { get_minimum_price, get_maximum_price, get_unit, get_price_range, get_supermarket_list, get_basket_price_per_supermarket };
