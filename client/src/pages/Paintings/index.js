import React, { useState } from "react";
import Masony from "react-masonry-component";
// import fs from "fs";
// import Modal from "../Modal";
import { imageList } from "./config";

// get photos from images/category-*/
// add them to dom

const Paintings = () => {
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModelOpen, setIsModelOpen] = useState(false);

  // const category = "business";

  // const currentPhotos = imageList.filter(
  //   (photo) => photo.category === category

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModelOpen(!isModelOpen);
  };

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./images/", false, /\.(png|jpe?g|svg|PNG|JPE?G|TIF|tif)$/)
  );

  // console.log(images);

  // Masory Options
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
  };

  return (
    <div>
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
        {images.map((image, i) => (
          <li className={`photo-item`}>
            <img src={images[i].default} alt={image.name} />
          </li>
        ))}
      </Masony>
    </div>
  );
};
// about
// blog
// no match
export default Paintings;
