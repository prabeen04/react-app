import React from 'react';
import Gallery from 'react-grid-gallery';

import Image from '../../../assets/images/web.jpg';
import ResponsiveImage from '../../../assets/images/responsive.png';
import MacbookImage from '../../../assets/images/macbook.png';
import IphoneImage from '../../../assets/images/iphone-x.png';
import AbstractImage from '../../../assets/images/abstract.jpg';
import GoogleImage from '../../../assets/images/google.png';
import PlanetImage from '../../../assets/images/planet.jpg';
import RobotImage from '../../../assets/images/robot.jpg';
import SunsetImage from '../../../assets/images/sunset.jpeg';

const IMAGES =
[{
        src: Image,
        thumbnail:Image,
        thumbnailWidth: 420,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: ResponsiveImage,
        thumbnail: ResponsiveImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: IphoneImage,
        thumbnail: IphoneImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: AbstractImage,
        thumbnail: AbstractImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: GoogleImage,
        thumbnail: GoogleImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: PlanetImage,
        thumbnail: PlanetImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: RobotImage,
        thumbnail: RobotImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: MacbookImage,
        thumbnail: MacbookImage,
        thumbnailWidth: 420,
        thumbnailHeight: 212
}];

class SimpleGallery extends React.Component{
  render(){
    return(
        <Gallery images={IMAGES}/>
    );
  }

}

export default SimpleGallery;
