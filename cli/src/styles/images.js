import image1 from '../images/image1.JPG';
import image2 from '../images/image2.JPG';
import image3 from '../images/image3.JPG';
import image4 from '../images/image4.JPG';
import image6 from '../images/image6.JPG';

const imageArray = [image2, image3, image4, image6, image1];

imageArray.forEach(src => {
  let image = new Image();
  image.src = src;
})

export { imageArray };
