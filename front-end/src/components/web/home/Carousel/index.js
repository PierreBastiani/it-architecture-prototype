import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
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
                        <div className="pictures-container" style={{width: "100%", height: "513px"}}>
                            <img src="/images/figma3.png" alt=" " className="img-responsive" style={{
                                position: "absolute",
                                top: "133px",
                                left: "0",
                                width: "80%",
                                height: "513px",
                            }}/>
                            <img src="/images/figma2.png" alt=" " className="img-responsive" style={{
                                position: "absolute",
                                top: "133px",
                                left: "0",
                                height: "513px",
                            }}/>
                            <img src="/images/figma.png" alt=" " className="img-responsive" style={{
                                position: "absolute",
                                top: "133px",
                                right: "0",
                                maxHeight: "513px",
                            }}/>
                            <div className="bottom-left" style={{
                                position: "absolute",
                                top: "20rem",
                                left: "8rem",
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
                                top: "30rem",
                                left: "8rem",
                                fontFamily: "Quicksand",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "20px",
                                lineHeight: "25px",
                                letterSpacing: "-0.01em",
                                color: "#838383",
                            }}>Save up to 60% off on your first order</div>
                        </div>
                </Grid>

            </Grid>
        )
    }
}
