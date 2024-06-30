import React from 'react'

function Product() {
  return (
    <div>
        {/* <div className="page-loader">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}

    <div className="wrapper">

        <div className="inc:_header.html"></div>



        <section className="product pt-0">

            <header>
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                    <h2 className="title">Mellany Sofa</h2>
                    <div className="text">
                        <p>Nam egestas tincidunt turpis</p>
                    </div>
                </div>
            </header>

            <div className="main">
                <div className="container">
                    <div className="row product-flex">

                        <div className="col-lg-4 product-flex-info">
                            <div className="clearfix">

                                <div className="clearfix">


                                    <div className="price">
                                        <span className="h3">
                                            $ 1999,00
                                            <small>$ 2999,00</small>
                                        </span>
                                    </div>

                                    <hr />


                                    <div className="info-box">
                                        <span><strong>Maifacturer</strong></span>
                                        <span>Brand name</span>
                                    </div>


                                    <div className="info-box">
                                        <span><strong>Materials</strong></span>
                                        <span>Wood, Leather, Acrylic</span>
                                    </div>

                                    <hr />



                                    <div className="info-box">
                                        <span><strong>Available Colors</strong></span>
                                        <div className="product-colors clearfix">
                                            <span className="color-btn color-btn-red"></span>
                                            <span className="color-btn color-btn-blue checked"></span>
                                            <span className="color-btn color-btn-green"></span>
                                            <span className="color-btn color-btn-gray"></span>
                                            <span className="color-btn color-btn-biege"></span>
                                        </div>
                                    </div>

                                    <hr />


                                    <div className="info-box">
                                        <span><strong>Choose size</strong></span>
                                        <div className="product-colors clearfix">
                                            <span className="color-btn color-btn-biege">
                                                <span className="product-size" data-text="">S</span>
                                            </span>
                                            <span className="color-btn color-btn-biege checked">M</span>
                                            <span className="color-btn color-btn-biege">XL</span>
                                            <span className="color-btn color-btn-biege">XXL</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="info-box">
                                        <span>
                                            Quantity
                                        </span>
                                        <span>
                                            <span className="row">
                                                <span className="col-6">
                                                    <input type="number" value="1" className="form-control"/>
                                                </span>
                                                <span className="col-6">
                                                    <a href="#" className="btn btn-danger">Buy now</a>
                                                </span>
                                            </span>
                                        </span>
                                    </div>

                                    <hr />

                                    <div className="info-box">
                                        <span>
                                            <small>*** We progress your order for shipping as soon as possible. Please note that after your order has been received, we can not change the delivery address. Control your address details in any case before placing your order!</small>
                                        </span>
                                    </div>

                                    <hr />

                                    <div className="info-box info-box-addto added">
                                        <span>
                                            <i className="add"><i className="fa fa-heart-o"></i> Add to favorites</i>
                                            <i className="added"><i className="fa fa-heart"></i> Remove from favorites</i>
                                        </span>
                                    </div>

                                    <div className="info-box info-box-addto">
                                        <span>
                                            <i className="add"><i className="fa fa-eye-slash"></i> Add to Watch list</i>
                                            <i className="added"><i className="fa fa-eye"></i> Remove from Watch list</i>
                                        </span>
                                    </div>

                                    <div className="info-box info-box-addto">
                                        <span>
                                            <i className="add"><i className="fa fa-star-o"></i> Add to Collection</i>
                                            <i className="added"><i className="fa fa-star"></i> Remove from Collection</i>
                                        </span>
                                    </div>

                                </div> 
                            </div> 
                        </div> 

                        <div className="col-lg-8 product-flex-gallery">


                            <div className="owl-product-gallery owl-carousel owl-theme open-popup-gallery">
                                <a href="assets/images/product-10.jpg"><img src="assets/images/product-10.jpg" alt="" /></a>
                                <a href="assets/images/product-9.jpg"><img src="assets/images/product-9.jpg" alt="" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>


        <section className="product-details">

            <div className="container">


                <ul className="nav nav-pills nav-pills-flat justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="tab-review-tab" data-toggle="tab" href="#tab-review" role="tab">
                            Reviews
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="tab-desc-tab" data-toggle="tab" href="#tab-desc" role="tab">
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="tab-info-tab" data-toggle="tab" href="#tab-shipping" role="tab">
                            Shipping
                        </a>
                    </li>
                </ul>


                <div className="tab-content" id="pills-tabContent">


                    <div className="tab-pane fade show active" id="tab-review">

                        <div className="col-md-8 offset-md-2">


                        <div className="rating">
  <div className="rating-overall">
    <div className="rating-header">
      <div className="row align-items-center">
        <div className="col-2">
          <div className="h1 m-0">4.8</div>
        </div>
        <div className="col-10">
          <div className="h3 m-0">User rating overall</div>
          <span>4.8 average based on 625 reviews</span>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-2">
        <p>5 <i className="fa fa-star"></i></p>
      </div>
      <div className="col-10">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '100%' }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <p>4 <i className="fa fa-star"></i></p>
      </div>
      <div className="col-10">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '85%' }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <p>3 <i className="fa fa-star"></i></p>
      </div>
      <div className="col-10">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '30%' }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <p>2 <i className="fa fa-star"></i></p>
      </div>
      <div className="col-10">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '20%' }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <p>1 <i className="fa fa-star"></i></p>
      </div>
      <div className="col-10">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '15%' }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>



                            <div className="comments">

                                <div className="comment-header">
                                    <div className="h3 m-0">Recent comments</div>
                                    <span>14 reviews for Bedroom product</span>
                                </div>

                                <div className="comment-wrapper">


                                    <div className="comment-block">


                                        <div className="comment-user">
                                            <div>
                                                <img src="assets/images/user.jpg" alt="Alternate Text" width="70" />
                                            </div>
                                            <div>
                                                <h5>
                                                    <span>John Doe</span>
                                                    <span className="pull-right">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                    <small>03.05.2017</small>
                                                </h5>
                                            </div>
                                        </div>


                                        <div className="comment-desc">
                                            <p>
                                                In vestibulum tellus ut nunc accumsan eleifend. Donec mattis cursus ligula, id
                                                iaculis dui feugiat nec. Etiam ut ante sed neque lacinia volutpat. Maecenas
                                                ultricies tempus nibh, sit amet facilisis mauris vulputate in. Phasellus
                                                tempor justo et mollis facilisis. Donec placerat at nulla sed suscipit. Praesent
                                                accumsan, sem sit amet euismod ullamcorper, justo sapien cursus nisl, nec
                                                gravida
                                            </p>
                                        </div>


                                        <div className="comment-block">
                                            <div className="comment-user">
                                                <div>
                                                    <img src="assets/images/user.jpg" alt="Alternate Text" width="70" />
                                                </div>
                                                <div>
                                                    <h5>
                                                        Administrator
                                                        <small>08.05.2017</small>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="comment-desc">
                                                <p>
                                                    Curabitur sit amet elit quis tellus tincidunt efficitur. Cras lobortis id
                                                    elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus. Quisque
                                                    a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                    nisl egestas diam, nec blandit diam ipsum eget dolor. Maecenas ultricies
                                                    tempus nibh, sit amet facilisis mauris vulputate in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="comment-block">


                                        <div className="comment-user">
                                            <div>
                                                <img src="assets/images/user.jpg" alt="Alternate Text" width="70" />
                                            </div>
                                            <div>
                                                <h5>
                                                    <span>John Doe</span>
                                                    <span className="pull-right">
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star active"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                    <small>03.05.2017</small>
                                                </h5>
                                            </div>
                                        </div>


                                        <div className="comment-desc">
                                            <p>
                                                Cras lobortis id elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus.
                                                Quisque a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                nisl egestas diam, nec blandit diam ipsum eget dolor. In vestibulum tellus
                                                ut nunc accumsan eleifend. Donec mattis cursus ligula, id iaculis dui feugiat
                                                nec. Etiam ut ante sed neque lacinia volutpat. Maecenas ultricies tempus
                                                nibh, sit amet facilisis mauris vulputate in. Phasellus tempor justo et mollis
                                                facilisis. Donec placerat at nulla sed suscipit. Praesent accumsan, sem sit
                                                amet euismod ullamcorper, justo sapien cursus nisl, nec gravida
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="comment-header text-center">
                                    <a href="#" className="btn btn-main">12 comments</a>
                                </div>


                                <div className="comment-add">

                                    <div className="comment-reply-message">
                                        <div className="h3 title">Leave a Reply </div>
                                        <p>Your email address will not be published.</p>
                                    </div>

                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" value="" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" value="" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="10" className="form-control" placeholder="Your comment"></textarea>
                                        </div>
                                        <div className="clearfix text-center">
                                            <a href="#" className="btn btn-main">Add comment</a>
                                        </div>
                                    </form>

                                </div>

                            </div> 

                        </div> 

                    </div> 

                    <div className="tab-pane fade" id="tab-desc">

                        <div className="col-md-8 offset-md-2">

                            <div>
                                <div className="h3 m-0">Product specification</div>
                                <span>Additional information</span>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-6">
                                    <img className="img-fluid" src="assets/images/specs.png" alt="Alternate Text" width="350" />

                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src="assets/images/specs.png" alt="Alternate Text" width="350" />

                                </div>

                            </div> 

                        </div> 

                    </div> 

                    <div className="tab-pane fade" id="tab-shipping">

                        <div className="col-md-8 offset-md-2">

                            <div>
                                <div className="h3 m-0">Shipping information</div>
                                <span>Additional information</span>
                            </div>

                            <hr />

                            <h5>Money Back Guarantee</h5>
                            <p>
                                Our Money Back Guarantee applies to virtually everything on our site, and
                                there's no extra fee for coverage. It’s automatic and covers your purchase price plus
                                original shipping on eligible purchases*. Follow these steps to get your refund.
                            </p>

                            <h5>Need to Return an Item?</h5>

                            <p>
                                Whatever you’re looking for, millions of items on our store are returnable. Before you
                                buy an item, check the seller’s return policy, then follow these easy steps to
                                make a return. If the item you received doesn't match the description in the
                                original listing, or if it arrived faulty or damaged,
                            </p>

                            <h5>Check an open return request</h5>

                            <p>
                                You can keep an eye on the progress of your return request by selecting Check your
                                return status below, or in your Purchase history.
                            </p>

                            <h5>Send the item back</h5>

                            <p>
                                You'll need to send it back within 5 business days. Who covers the shipping costs
                                depends on why you're returning it. Find more information about return shipping.

                                When you send your item back we recommend using tracked shipping. Adding tracking
                                details to your return helps protect against delays or issues in the refund process.
                            </p>
                        </div> 


                    </div>  

                </div> 
            </div>

        </section>


        <section className="products">

            <header>
                <div className="container">
                    <h2 className="title">Popular products</h2>
                    <div className="text">
                        <p>Check out our latest collections. <br /> Make your dream come true!</p>
                    </div>
                </div>
            </header>

            <div className="container">

                <div className="row">


                    <div className="col-6 col-lg-3">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list">
                                        <i className="icon icon-heart"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew">
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
                                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam
                                        lorem ea duo labore diam sit et consetetur nulla
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>


                    <div className="col-6 col-lg-3">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list">
                                        <i className="icon icon-heart"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew">
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
                                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam
                                        lorem ea duo labore diam sit et consetetur nulla
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>


                    <div className="col-6 col-lg-3">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list">
                                        <i className="icon icon-heart"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew">
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
                                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam
                                        lorem ea duo labore diam sit et consetetur nulla
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>

                    

                    <div className="col-6 col-lg-3">
                        <article>
                            <div className="info">
                                <span className="add-favorite added">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list">
                                        <i className="icon icon-heart"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew">
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
                                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam
                                        lorem ea duo labore diam sit et consetetur nulla
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>

                </div> 

                <div className="wrapper-more">
                    <a href="products-grid.html" className="btn btn-main btn-sm">View all products</a>
                </div>

            </div> 

        </section>


        <div className="popup-main mfp-hide" id="productid1">


            <div className="product">


                <div className="popup-title">
                    <div className="h3 title">
                        Modern sofa
                        <small>product category</small>
                    </div>
                </div>


                <div className="owl-product-gallery owl-theme owl-carousel">
                    <img src="assets/images/item-1.jpg" alt="" width="640" />
                    <img src="assets/images/item-2.jpg" alt="" width="640" />
                </div>


                <div className="popup-content">
                    <div className="product-info-wrapper">
                        <div className="row">


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
                                    <span><i className="fa fa-check-square-o"></i> in stock</span>
                                </div>
                            </div>


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
                                        <span className="color-btn color-btn-biege checked">M</span>
                                        <span className="color-btn color-btn-biege">XL</span>
                                        <span className="color-btn color-btn-biege">XXL</span>
                                    </div>
                                </div>
                            </div>

                        </div> 
                    </div> 
                </div> 

                <div className="popup-table">
                    <div className="popup-cell">
                        <div className="price">
                            <span className="h3">$ 1999,00 <small>$ 2999,00</small></span>
                        </div>
                    </div>
                    <div className="popup-cell">
                        <div className="popup-buttons">
                            <a href="product.html"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
                            <a href="javascript:void(0);"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
                        </div>
                    </div>
                </div>

            </div> 
        </div>

        <div className="inc:_footer.html"></div>

    </div> 
    {/* <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/include.js"></script>
    <script src="js/ion.rangeSlider.js"></script>
    <script src="js/magnific-popup.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/tilt.jquery.js"></script>
    <script src="js/jquery.easypiechart.js"></script>
    <script src="js/bigtext.js"></script>
    <script src="js/main.js"></script> */}
    </div>
  )
}

export default Product
