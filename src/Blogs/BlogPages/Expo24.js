import '../BlogStyles/Blog.css';
import TShirt from '../../Asstes/Blogs/tShirt.jpg';
import PreVibrance24 from '../../Asstes/Blogs/preVibrance-24.jpg';
import BlogCard from '../../Components/BlogCard';
import BlogCarousel from '../BlogComponents/BlogCarousel';

import image1 from '../../Asstes/Blogs/Expo/IMG_5107.jpg';
import image2 from '../../Asstes/Blogs/Expo/IMG_5183.jpg';
import image3 from '../../Asstes/Blogs/Expo/IMG_5203.jpg';
import image4 from '../../Asstes/Blogs/Expo/IMG_5213.jpg';
import image5 from '../../Asstes/Blogs/Expo/IMG_5221.jpg';

const Expo24 = () => {
  const imagearr = [image1, image2, image3, image4, image5];
  const blogsArr = [
    {
      blogImg: TShirt,
      blogHeading: 'Club T-Shirt',
      blogText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis',
      blogLink: '/tshirt',
    },
    {
      blogImg: PreVibrance24,
      blogHeading: 'Pre-Vibrance 2024',
      blogText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis',
      blogLink: '/previbrance24',
    },
  ];
  return (
    <div className="blogpage">
      <h1>Expo 2024</h1>
      <div className="blogcarousel">
        <BlogCarousel imagearr={imagearr} />
      </div>
      <div className="blog-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptatum sunt ipsum sit modi optio possimus tempore eaque amet
          veritatis accusamus sequi voluptas quaerat deserunt, harum accusantium
          incidunt provident recusandae officiis? Doloremque rerum molestiae
          facere, odit magni non, mollitia recusandae facilis voluptate eum
          consectetur? Vel debitis quidem vero commodi! Expedita autem itaque
          laudantium quas libero, corporis praesentium ex suscipit aspernatur
          quam fugit, asperiores illo atque, quod adipisci maxime accusantium
          dicta eligendi sit minima debitis! Fugit, itaque mollitia commodi
          harum facere neque magni veritatis excepturi debitis eius nihil
          dignissimos temporibus eum. Modi adipisci dolor beatae eveniet dicta
          explicabo culpa aut recusandae laboriosam nam, expedita inventore hic
          asperiores optio! Quod reprehenderit porro cum. Recusandae explicabo,
          temporibus aspernatur sint officiis excepturi iure beatae?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          doloribus ipsam quae aliquam facere labore magnam vero eaque omnis vel
          laudantium minus corrupti aperiam fuga quam optio et facilis eius
          nulla maxime illo ea, dicta pariatur quibusdam. Laboriosam similique
          aspernatur architecto, et quod dolore rem delectus nemo fugit
          consequatur sapiente maxime, iste commodi corporis, ex omnis explicabo
          quas necessitatibus quibusdam ipsa. Aut veritatis odit, nostrum fuga
          sequi maiores! Nesciunt magnam vero iusto. Neque inventore qui vel
          distinctio nemo! Harum, aliquam.
        </p>
      </div>
      <div className="more-section">
        <h2>More like this:</h2>
        <div className="other-blogs">
          {blogsArr.map((ele, index) => (
            <BlogCard key={index} blogData={ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expo24;