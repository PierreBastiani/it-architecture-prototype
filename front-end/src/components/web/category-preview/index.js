import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class CategoryPreview extends Component {
    render() {
        return (
            <div className="col-md-3 m-wthree" style={{"paddingBottom": "3rem"}}>
                <div className="col-m">
                    <Link to="#" data-toggle="modal" data-target={`#myModal${this.props.index + 1}`} className="offer-img">
                        <img src={`${this.props.category.thumbnail_url}`} className="img-responsive" alt="" style={{}}/>
                    </Link>
                    <div className="mid-1">
                        <div className="women">
                            <h6><Link to={`/category/${this.props.category.name}`}></Link>{this.props.category.name}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}