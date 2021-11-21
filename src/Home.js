import React, { Component } from "react";
import Media from "react-media";
import Homepage1280 from "./homepage1280.js";
import Iphone12promaxhomepage from './iphone12ProMaxHomepage.js';
import Ipadpro129inhomepage from './ipadPro129inHomepage.js';

class Home extends Component {
    render() {
        return (
            <Media queries={{
                small: "(max-width:599px)",
                medium: "(min-width:600px) and (max-width:1199px)",
                large: "(min-width:1200px)"
            }}>
                {matches => (
                    <React.Fragment>
                        {matches.small && <Iphone12promaxhomepage />}
                        {matches.medium && <Ipadpro129inhomepage />}
                        {matches.large && <Homepage1280 />}
                    </React.Fragment>
                )}
            </Media>
        );
    }
}

export default Home;