import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className=" category-section style-4 padding-tb ">
      <div className="container">
        {/* Header section  */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/* Seaction Card */}
        <div className="section-wrapper">
          <div className="row g-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
            {categoryList.map((data, i) => (
              <div className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                    {/* content */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={data.iconName}></i>
                      </div>
                      <Link to="/shop">
                        <h6>{data.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
