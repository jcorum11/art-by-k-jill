import React, { useState } from "react";
import Masony from "react-masonry-component";
import Hero from '../../components/Hero';

const Paintings = () => {
  const [categoryString, setCategory] = useState("all");

  // import images in images folder as an object
  function importAll(r) {
    return r.keys().map(r);
  }
  const pictureObjectArray = importAll(
    require.context("./images/", false, /\.(png|jpe?g|svg|PNG|JPE?G|TIF|tif)$/)
  );

  // jsx for dynamically rendering images
  const dynamicImageHandler = (filteredPictureObjectArray) => {
    return filteredPictureObjectArray.map((image, i) => (
      <li className={`photo-item`}>
        <img src={filteredPictureObjectArray[i].default} alt={image.name} />
      </li>
    ));
  };

  // when current category changes: filter for images with that category
  const pictureArrayHandler = () => {
    if(categoryString === "all") {
      return dynamicImageHandler(pictureObjectArray)
    }
    const filteredPictureObjectArray = [];
    pictureObjectArray.map((pictureObject) => {
      const pathArray = pictureObject.default.split("/");
      const nameArray = pathArray[pathArray.length - 1].split("-");
      const pictureCategoryString = nameArray[0];
      if (pictureCategoryString === categoryString) {
        filteredPictureObjectArray.push(pictureObject);
      }
    });
    return dynamicImageHandler(filteredPictureObjectArray)
  };

  // Masory Options
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
  };

  return (
    <div>
      <Hero />
      <div id="button-bar" className="container">
        <button
          id="all-btn "
          className="btn-warning mr-4"
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          id="paintings-btn "
          className="btn-warning m-4"
          onClick={() => setCategory("paintings")}
        >
          Paintings
        </button>
        <button
          id="stationary-btn "
          className="btn-warning m-4"
          onClick={() => setCategory("stationary")}
        >
          Stationary
        </button>
        <button
          id="business-btn "
          className="btn-warning m-4"
          onClick={() => setCategory("business")}
        >
          Business
        </button>
      </div>
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {/* {isModelOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )} */}
        {pictureArrayHandler()}
      </Masony>
    </div>
  );
};
// about
// blog
// no match
export default Paintings;
