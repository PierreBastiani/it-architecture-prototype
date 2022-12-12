import React from 'react';
import { Grid, Card } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './cart.css';
import { get_supermarket_list, get_basket_price_per_supermarket } from '../../../products.ts';

function Comparison({ cartProps }) {
  let productsInCart = [];
  Object.keys(cartProps.products).forEach(function(item) {
    productsInCart.push(cartProps.products[item]);
  });
  let supermarkets = get_supermarket_list();
  let products_name = productsInCart.map((product) => product.name);
  let supermarkets_prices = [];

  supermarkets.forEach((supermarket) => {
    supermarkets_prices.push({
      total: get_basket_price_per_supermarket(products_name, supermarket),
      name: supermarket
    });
  });
  console.log(supermarkets_prices);

  return (

    <div>
      <Grid container className="shopping_cart">
        <Grid item md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <div className="spec ">
            <h3>Comparison</h3>
            <div className="ser-t">
              <b />
              <span><i /></span>
              <b className="line" />
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <table className="table ">
                <tbody><tr>
                  <th className="t-head head-it ">Supermarket</th>
                  <th className="t-head">Basket price</th>
                </tr>
                  {
                    supermarkets_prices.map((supermarket, index) => {
                      console.log("rendered");
                      console.log(supermarket);
                      return (
                        <tr className="cross1" key={index}>
                          <td className="t-data ring-in">
                            <div className="sed">
                              <h5>{supermarket.name}</h5>
                            </div>
                          </td>
                          <td className="t-data t-w3l">{supermarket.total}€</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps)(Comparison);

