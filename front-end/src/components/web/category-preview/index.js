import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class CategoryPreview extends Component {
    render() {
        return (
            <div className="col-md-3 m-wthree" style={{"paddingBottom": "3rem"}}>
                <div className="col-m">
                    <Link to="#" data-toggle="modal" data-target={`#myModal${this.props.index + 1}`} className="offer-img">
                        <img src={`${this.props.category}`} className="img-responsive" alt="" />
                    </Link>
                    <div className="mid-1">
                        <div className="women">
                            <h6><Link to="/product-details">{this.props.category}</Link>(1 {this.props.category})</h6>
                        </div>
                        <div className="mid-2">
                            <p><label>{this.props.category}</label><em className="item_price">{this.props.category}</em></p>
                            <div className="block">
                                <div className="starbox small ghosting"> </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}