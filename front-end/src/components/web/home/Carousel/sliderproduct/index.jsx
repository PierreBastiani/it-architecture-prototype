import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import json from products.json file
import products from '../../../../../products.json';
import ProductPreview from "../../../product-preview";

export default class Sliderproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    render() {
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
        };
        const settingsMobile = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        const { width } = this.state;
        const isMobile = width <= 800;

        // Using ProductPreview component display products list in products.json file in slider

        if (isMobile)
            return (
                <div>
                    <Slider {...settingsMobile}>
                        {products.map((product, index) => (
                            <ProductPreview index={index} product={product} />
                        ))}
                    </Slider>
                </div>
            )
        else
            return (
                <div>
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <ProductPreview index={index} product={product} />
                        ))}
                    </Slider>
                </div>
            )
    }
}
