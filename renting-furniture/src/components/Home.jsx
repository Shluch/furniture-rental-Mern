import React from "react";

function Home() {
  return (
    <div>
      <div className="wrapper">
        {/* Header content */}
        <section className="header-content">
          <h2 className="d-none">Slider element</h2>

          <div className="container-fluid">
            <div
              className="owl-slider owl-carousel owl-theme"
              data-autoplay="true"
            >
              {/* Slide item */}
              <div
                className="item d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/slide-1.jpg)" }}
              >
                <div className="container">
                  <div className="caption">
                    <div className="animated" data-start="fadeInUp">
                      <div className="promo pt-3">
                        <div className="title title-sm p-0">Sofa Grace</div>
                      </div>
                    </div>
                    <div className="animated" data-start="fadeInUp">
                      Score new arrivals from latest items
                      <br />
                      Multipurpose eCommerce template ready
                    </div>
                    <div className="animated" data-start="fadeInUp">
                      <div className="pt-3">
                        <a
                          href="#"
                          target="_blank"
                          className="btn btn-outline-warning"
                        >
                          Buy now
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="btn btn-outline-light"
                        >
                          Get first discount
                        </a>
                      </div>
                    </div>
                    <div className="animated" data-start="fadeInUp">
                      <div className="promo pt-5">
                        <div className="h6 p-0 m-0">Get special price</div>
                        <div className="price">
                          <span>$1499.99</span>
                          <span>3499.99</span>
                        </div>
                        <small className="d-none d-sm-block">
                          ** Product prices with discount are available until
                          the end of stock{" "}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide item */}
              <div
                className="item d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/slide-2.jpg)" }}
              >
                <div className="container">
                  <div className="caption">
                    <div className="animated" data-start="fadeInUp">
                      <div className="big-text big-text-sm">
                        <span>Save now </span>
                        <span>50%</span>
                        <span>on new kitchen</span>
                        <div>
                          <a
                            href="#"
                            target="_blank"
                            className="btn btn-info btn-block"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="animated d-none" data-start="fadeInUp">
                      <a href="#" target="_blank" className="btn btn-info">
                        Buy this template
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-outline-light"
                      >
                        Get first discount
                      </a>
                    </div>
                    <div className="animated" data-start="fadeInUp">
                      <div className="promo pt-5">
                        <div className="badge badge-secondary">New arrival</div>
                        <div className="h2 p-0 mt-1">Kitchen Moderna</div>
                        <div className="price">
                          <span>$7299.99</span>
                          <span>8399.99</span>
                        </div>
                        <small className="d-none d-sm-block">
                          ** Product prices with discount are available until
                          the end of stock{" "}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide item */}
              <div
                className="item d-flex align-items-center"
                style={{ backgroundImage: "url(assets/images/slide-3.jpg)" }}
              >
                <div className="container">
                  <div className="caption">
                    <div className="promo text-center">
                      <div className="animated" data-start="fadeInUp">
                        <div className="title title-sm p-0">
                          Bathroom Furniture
                        </div>
                      </div>
                      <div className="animated" data-start="fadeInUp">
                        Score new arrivals from latest items
                        <br />
                        Multipurpose eCommerce template ready
                      </div>
                      <div className="animated" data-start="fadeInUp">
                        <a href="#" target="_blank" className="btn btn-light">
                          New collection
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="btn btn-outline-light"
                        >
                          Get first discount
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* /owl-slider */}
          </div>
        </section>

        {/* Featured categories */}
        <section className="blog blog-block">
          {/* Header */}
          <header>
            <div className="container">
              <h2 className="title">Featured categories</h2>
              <div className="text">
                <p>
                  We just keep things minimal.{" "}
                  <a href="category.html" className="btn btn-main">
                    View more
                  </a>
                </p>
              </div>
            </div>
          </header>
          {/* Content */}
          <div className="container">
            <div className="scroll-wrapper">
              <div className="row scroll text-center">
                {/* Item */}
                <div className="col-md-4">
                  <article data-3d>
                    <a href="products-grid.html">
                      <div className="image">
                        <img src="assets/images/product-1.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="label">2020 Collection</div>
                        <div className="title">
                          <h2 className="h4">Beedroms</h2>
                        </div>
                        <div className="description d-none d-sm-block">
                          <p>Top picks four your desire</p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-clean">Shop now</span>
                      </div>
                    </a>
                  </article>
                </div>

                {/* Item */}
                <div className="col-md-4">
                  <article data-3d>
                    <a href="products-grid.html">
                      <div className="image">
                        <img src="assets/images/product-2.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="label">Modern design</div>
                        <div className="title">
                          <h2 className="h4">Kitchens</h2>
                        </div>
                        <div className="description d-none d-sm-block">
                          <p>Explore popular devices</p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-clean">Shop now</span>
                      </div>
                    </a>
                  </article>
                </div>

                {/* Item */}
                <div className="col-md-4">
                  <article data-3d>
                    <a href="products-grid.html">
                      <div className="image">
                        <img src="assets/images/product-3.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="label">New discounts</div>
                        <div className="title">
                          <h2 className="h4">Living rooms</h2>
                        </div>
                        <div className="description d-none d-sm-block">
                          <p>Available for quick shipping</p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-clean">Shop now</span>
                      </div>
                    </a>
                  </article>
                </div>
              </div>{" "}
              {/* /row */}
            </div>
          </div>{" "}
          {/* /container */}
        </section>

        {/* Popular products */}
        <section className="products">
          {/* Header */}
          <header>
            <div className="container">
              <h2 className="title">Popular products</h2>
              <div className="text">
                <p>
                  Find your perfect match{" "}
                  <a href="products-grid.html" className="btn btn-main">
                    View all
                  </a>
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="container">
            <div className="row">
              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-10.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Anna</a>
                      </h2>
                      <sub>$ 159,-</sub>
                      <sup>$ 139,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <span className="badge badge-warning">-20%</span>
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-9.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Lucy</a>
                      </h2>
                      <sub>$ 319,-</sub>
                      <sup>$ 219,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <span className="badge badge-info">New arrival</span>
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-8.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Ella</a>
                      </h2>
                      <sub>$ 899,-</sub>
                      <sup>$ 750,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite added">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Grace</a>
                      </h2>
                      <sub>$ 699,-</sub>
                      <sup>$ 499,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-6.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Nora</a>
                      </h2>
                      <sub>$ 299,-</sub>
                      <sup>$ 199,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Product item */}
              <div className="col-6 col-lg-4">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="#productid1"
                        className="mfp-open"
                        data-title="Quick wiew"
                      >
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="product.html">
                        <img src="assets/images/product-5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Sophie</a>
                      </h2>
                      <sub>$ 699,-</sub>
                      <sup>$ 499,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur
                        facilisis blandit et aliquyam lorem ea duo labore diam
                        sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>{" "}
            {/* /row */}
          </div>
        </section>

        {/* Product popup */}
        <div className="popup-main mfp-hide" id="productid1">
          <div className="product">
            {/* Popup-title */}
            <div className="popup-title">
              <div className="h3 title">
                Modern sofa
                <small>product category</small>
              </div>
            </div>
            {/* Product gallery */}
            <div className="owl-product-gallery owl-theme owl-carousel">
              <img src="assets/images/item-1.jpg" alt="" width="640" />
              <img src="assets/images/item-2.jpg" alt="" width="640" />
            </div>
            {/* Popup info */}
            <div className="popup-content">
              <div className="product-info-wrapper">
                <div className="row">
                  {/* Left side */}
                  <div className="col-sm-6">
                    <div className="info-box">
                      <strong>Maifacturer</strong>
                      <span>Brand name</span>
                    </div>
                    <div className="info-box">
                      <strong>Materials</strong>
                      <span>Wood, Leather, Acrylic</span>
                    </div>
                    <div className="info-box">
                      <strong>Availability</strong>
                      <span>
                        <i className="fa fa-check-square-o"></i> in stock
                      </span>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="col-sm-6">
                    <div className="info-box">
                      <strong>Available Colors</strong>
                      <div className="product-colors clearfix">
                        <span className="color-btn color-btn-red"></span>
                        <span className="color-btn color-btn-blue checked"></span>
                        <span className="color-btn color-btn-green"></span>
                        <span className="color-btn color-btn-gray"></span>
                        <span className="color-btn color-btn-biege"></span>
                      </div>
                    </div>
                    <div className="info-box">
                      <strong>Choose size</strong>
                      <div className="product-colors clearfix">
                        <span className="color-btn color-btn-biege">S</span>
                        <span className="color-btn color-btn-biege checked">
                          M
                        </span>
                        <span className="color-btn color-btn-biege">XL</span>
                        <span className="color-btn color-btn-biege">XXL</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* /row */}
              </div>{" "}
              {/* /product-info-wrapper */}
            </div>{" "}
            {/* /popup-content */}
            <div className="popup-table">
              <div className="popup-cell">
                <div className="price">
                  <span className="h3">
                    $ 1999.00 <small>$ 2999.00</small>
                  </span>
                </div>
              </div>
              <div className="popup-cell">
                <div className="popup-buttons">
                  <a href="product.html">
                    <span className="icon icon-eye"></span>{" "}
                    <span className="hidden-xs">View more</span>
                  </a>
                  <a href="javascript:void(0);">
                    <span className="icon icon-cart"></span>{" "}
                    <span className="hidden-xs">Buy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /product */}
        </div>

        {/* Cards */}
        <section className="cards">
          {/* Header */}
          <header>
            <div className="container">
              <h2 className="title">Interior inspiration</h2>
              <div className="text">
                <p>Create an inviting space for yourself and family</p>
              </div>
            </div>
          </header>
          {/* Content */}
          <div className="container-fluid">
            <div className="row">
              {/* Item */}
              <div className="col-lg-8">
                <figure>
                  <figcaption
                    style={{ backgroundImage: "url(assets/images/box-1.jpg)" }}
                  >
                    <img src="assets/images/box-1.jpg" alt="" />
                  </figcaption>
                  <a href="#interiorId1" className="btn btn-clean">
                    Open up for easy living
                  </a>
                </figure>
              </div>

              {/* Item */}
              <div className="col-lg-4">
                <figure>
                  <figcaption
                    style={{ backgroundImage: "url(assets/images/box-2.jpg)" }}
                  >
                    <img src="assets/images/box-2.jpg" alt="" />
                  </figcaption>
                  <a href="#interiorId1" className="btn btn-clean">
                    Traditional looks
                  </a>
                </figure>
              </div>

              {/* Item */}
              <div className="col-lg-4">
                <figure>
                  <figcaption
                    style={{ backgroundImage: "url(assets/images/box-3.jpg)" }}
                  >
                    <img src="assets/images/box-3.jpg" alt="" />
                  </figcaption>
                  <a href="#interiorId1" className="btn btn-clean">
                    Sleek and sustainable
                  </a>
                </figure>
              </div>

              {/* Item */}
              <div className="col-lg-4">
                <figure>
                  <figcaption
                    style={{ backgroundImage: "url(assets/images/box-4.jpg)" }}
                  >
                    <img src="assets/images/box-4.jpg" alt="" />
                  </figcaption>
                  <a href="#interiorId1" className="btn btn-clean">
                    Compact living
                  </a>
                </figure>
              </div>

              {/* Item */}
              <div className="col-lg-4">
                <figure>
                  <figcaption
                    style={{ backgroundImage: "url(assets/images/box-5.jpg)" }}
                  >
                    <img src="assets/images/box-5.jpg" alt="" />
                  </figcaption>
                  <a href="#interiorId1" className="btn btn-clean">
                    Classic design
                  </a>
                </figure>
              </div>
            </div>{" "}
            {/* /row */}
          </div>{" "}
          {/* /container-fluid */}
        </section>

        {/* Blog */}
        <section className="blog blog-widget blog-animated">
          {/* Header */}
          <header>
            <div className="container">
              <h2 className="h2 title">Design stories</h2>
              <div className="text">
                <p>
                  Explore and unfold thoughts{" "}
                  <a href="blog-grid.html" className="btn btn-main">
                    View all
                  </a>
                </p>
              </div>
            </div>
          </header>
          {/* Content */}
          <div className="container">
            <div className="row">
              {/* Blog item */}
              <div className="col-md-12 col-lg-4">
                <article>
                  <a href="article.html" className="blog-link">
                    <div
                      className="image"
                      style={{
                        backgroundImage: "url(assets/images/product-1.jpg)",
                      }}
                    >
                      <img src="assets/images/product-1.jpg" alt="" />
                    </div>
                    <div className="entry entry-table">
                      <div className="date-wrapper">
                        <div className="date">
                          <span>Sep</span>
                          <strong>08</strong>
                          <span>2019</span>
                        </div>
                      </div>
                      <div className="title">
                        <h2 className="h5">
                          Home Organizers that Add Color to Your Space
                        </h2>
                      </div>
                    </div>
                  </a>
                </article>
              </div>

              {/* Blog item */}
              <div className="col-md-12 col-lg-4">
                <article>
                  <a href="article.html" className="blog-link">
                    <div
                      className="image"
                      style={{
                        backgroundImage: "url(assets/images/product-2.jpg)",
                      }}
                    >
                      <img src="assets/images/product-2.jpg" alt="" />
                    </div>
                    <div className="entry entry-table">
                      <div className="date-wrapper">
                        <div className="date">
                          <span>Sep</span>
                          <strong>04</strong>
                          <span>2019</span>
                        </div>
                      </div>
                      <div className="title">
                        <h2 className="h5">
                          How to use room dividers in small spaces
                        </h2>
                      </div>
                    </div>
                  </a>
                </article>
              </div>

              {/* Blog item */}
              <div className="col-md-12 col-lg-4">
                <article>
                  <a href="article.html" className="blog-link">
                    <div
                      className="image"
                      style={{
                        backgroundImage: "url(assets/images/product-3.jpg)",
                      }}
                    >
                      <img src="assets/images/product-3.jpg" alt="" />
                    </div>
                    <div className="entry entry-table">
                      <div className="date-wrapper">
                        <div className="date">
                          <span>Sep</span>
                          <strong>01</strong>
                          <span>2019</span>
                        </div>
                      </div>
                      <div className="title">
                        <h2 className="h5">
                          How to pick a garden color palette
                        </h2>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            </div>{" "}
            {/* /row */}
          </div>{" "}
          {/* /container */}
        </section>

        {/* Newsletter */}
        <section className="banner">
          <div className="container-fluid">
            <div
              className="banner-image"
              style={{ backgroundImage: "url(assets/images/gallery-1.jpg)" }}
            >
              {/* Header */}
              <header>
                <div className="container">
                  <h2 className="h2 title">Stay in touch!</h2>
                  <div className="text">
                    <p>Be first to know about all new interior features!</p>
                  </div>
                </div>
              </header>

              {/* Content */}
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      name="name"
                      placeholder="Enter your e-mail"
                    />
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="btn btn-clean">
                      Subscribe now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /container-fluid */}
        </section>

        {/* Instagram */}
        <section className="instagram">
          {/* Header */}
          <header>
            <h2 className="h6 title">
              <i className="fa fa-instagram fa-3x"></i> <br />
              #DivanoFurniture
            </h2>
          </header>

          {/* Gallery */}
          <div className="container">
            <div className="gallery clearfix">
              <a className="item" href="#">
                <img src="assets/images/product-1.jpg" alt="Alternate Text" />
              </a>
              <a className="item" href="#">
                <img src="assets/images/product-2.jpg" alt="Alternate Text" />
              </a>
              <a className="item" href="#">
                <img src="assets/images/product-3.jpg" alt="Alternate Text" />
              </a>
              <a className="item" href="#">
                <img src="assets/images/product-4.jpg" alt="Alternate Text" />
              </a>
              <a className="item" href="#">
                <img src="assets/images/product-5.jpg" alt="Alternate Text" />
              </a>
              <a className="item" href="#">
                <img src="assets/images/product-6.jpg" alt="Alternate Text" />
              </a>
            </div>{" "}
            {/* /gallery */}
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits">
          {/* Header */}
          <header className="d-none">
            <div className="container">
              <h2 className="h2 title">Benefits</h2>
            </div>
          </header>
          {/* Content */}
          <div className="container">
            <div className="row">
              {/* Icon */}
              <div className="col-6 col-lg-3" data-tilt>
                <figure>
                  <div className="icon">
                    <i className="icon icon-gift"></i>
                  </div>
                  <figcaption>
                    <span>
                      <strong>Get your gift</strong> <br />
                      <small>Are you a new customer?</small>
                    </span>
                  </figcaption>
                </figure>
              </div>

              {/* Icon */}
              <div className="col-6 col-lg-3" data-tilt>
                <figure>
                  <div className="icon">
                    <i className="icon icon-rocket"></i>
                  </div>
                  <figcaption>
                    <span>
                      <strong>Fast delivery</strong> <br />
                      <small>We're shipping all over the world</small>
                    </span>
                  </figcaption>
                </figure>
              </div>

              {/* Icon */}
              <div className="col-6 col-lg-3" data-tilt>
                <figure>
                  <div className="icon">
                    <i className="icon icon-history"></i>
                  </div>
                  <figcaption>
                    <span>
                      <strong>Money-back guarantee</strong> <br />
                      <small>30 day money back gurantee</small>
                    </span>
                  </figcaption>
                </figure>
              </div>

              {/* Icon */}
              <div className="col-6 col-lg-3" data-tilt>
                <figure>
                  <div className="icon">
                    <i className="icon icon-diamond"></i>
                  </div>
                  <figcaption>
                    <span>
                      <strong>VIP discounts</strong> <br />
                      <small>Become VIP member</small>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>{" "}
            {/* /row */}
          </div>{" "}
          {/* /container */}
        </section>
      </div>{" "}
      {/* /wrapper */}
    </div>
  );
}

export default Home;
