import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '9rem' }}>
                    <Slider {...settings}>
                        <div>
                            <img src="/images/figma.png" alt="supermarket" style={{
                                position: "absolute",
                                width: "1920px",
                                height: "477px",
                                left: "0px",
                                top: "150px",
                            }}/>
                            <img src="/images/figma2.png" alt="supermarket"/>
                            <div className="bottom-left" style={{
                                position: "absolute",
                                top: "10rem",
                                left: "10rem",
                                fontFamily: "Quicksand",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "55px",
                                lineHeight: "69px",
                                letterSpacing: "-0.01em",
                                color: "#838383",
                            }}>Don't miss our daily amazing deals.</div>
                            <div className="bottom-left" style={{
                                position: "absolute",
                                top: "20rem",
                                left: "10rem",
                                fontFamily: "Quicksand",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "20px",
                                lineHeight: "25px",
                                letterSpacing: "-0.01em",
                                color: "#838383",
                            }}>Save up to 60% off on your first order</div>
                        </div>
                    </Slider>
                </Grid>

            </Grid>
        )
    }
}
