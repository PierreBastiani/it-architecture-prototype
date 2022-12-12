import React, { Component } from 'react'
import {Link} from "react-router-dom";

// return cheapest option
function cheapest(options) {
    let cheapest = options[0];
    for (let i = 1; i < options.length; i++) {
        if (options[i].price < cheapest.price) {
            cheapest = options[i];
        }
    }
    return cheapest;
}

// return most expensive option
function mostExpensive(options) {
    let mostExpensive = options[0];
    for (let i = 1; i < options.length; i++) {
        if (options[i].price > mostExpensive.price) {
            mostExpensive = options[i];
        }
    }
    return mostExpensive;
}

// conditional offer div
function offerDiv(offer) {
    if (offer) {
        return (
            <div className="offer"><p><span>Offer</span></p></div>
        )
    }
}

export default class ProductPreview extends Component {
    render() {
        return (
            <div className="col-md-3 m-wthree" style={{"paddingBottom": "3rem"}}>
                <div className="col-m">
                    <Link to="#" data-toggle="modal" data-target={`#myModal${this.props.index + 1}`} className="offer-img">
                        <img src={`${this.props.product.thumbnail_url}`} className="img-responsive" alt="" />
                        {offerDiv(this.props.product.offer)}
                    </Link>
                    <div className="mid-1">
                        <div className="women">
                            <h6><Link to="/product-details">{this.props.product.name}</Link>(1 {this.props.product.unit})</h6>
                        </div>
                        <div className="mid-2">
                            <p><label>${mostExpensive(this.props.product.options).price}</label><em className="item_price">${cheapest(this.props.product.options).price}</em></p>
                            <div className="block">
                                <div className="starbox small ghosting"> </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="add">
                            <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart(this.props.product.name)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}