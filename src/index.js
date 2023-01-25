import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Carousel>
        <div>
            <video controls width="1080px"
                   height="600px">
                <source src="assets/NewsIntro720p.mp4" type="video/mp4"/>
            </video>
        </div>
        <div>
            <img src="assets/1.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/2.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/3.PNG" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/4.PNG" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/5.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/6.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/7.png" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/8.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/9.jpeg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/10.jpg" width="400"
                 height="700"/>
        </div>
        <div>
            <img src="assets/danceAnim.gif" width="400"
                 height="700"/>
        </div>
    </Carousel>
);

