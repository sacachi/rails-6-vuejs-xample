<template>
  <div id="home-page">
    <section class="logo">
      <div class="container-fluid background_logo" id="logo">
        <a class="img_logo" href="/">
          <img src="../../../../packs/images/logo-light.png" alt="" />
        </a>
      </div>
    </section>

    <section class="container-fluid container_slide">
      <router-link to="/">
        <el-button class="button-order order-barber" type="success">VỀ TRANG CHỦ</el-button>
      </router-link>
      <router-link :to="{ name: 'frontFoods' }">
        <el-button class="button-order order-food" type="success">ĐẶT CƠM NGAY</el-button>
      </router-link>
      <VueSlickCarousel
        :arrows="true"
        :dots="false"
        :slidesToShow="1"
        :slidesToScroll="1"
        :autoplay="true"
        :autoplaySpeed="5000"
      >
        <div>
          <img
            class="img-slide-banner"
            src="../../../../packs/images/food.jpg"
          />
        </div>
      </VueSlickCarousel>

        <h2 class="text-header">
          Bữa cơm tuyệt vời trong mùa COVID-19 <br>
          <span class="text-header-small">
          Dịch vụ chuyên nghiệp, sạch sẽ, nhanh chóng và giữ khoảng cách an toàn, giúp bạn tránh xa khỏi tránh khỏi COVID-19.
        </span>
        </h2>
    </section>
    <section class="container about-us mt80">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="about-us_content about-us_content_food">
            <h2>Về Chúng Tôi</h2>
            <p class="about-us_des">
                Không chỉ phụ vụ các dịch vụ về tóc hay làm nail, Taglio còn có dịch vụ giao đồ ăn tận nhà, nhằm giúp bạn tránh xa COVID-19 trong mùa dịch.
            </p>
          </div>
          <div class="about-us_content1">
            <p>
              Dịch vụ của chúng tôi chính là kết hợp với các quán ăn, tiệm nước để cung cấp cho người dùng những bữa ăn được ship đến tận nhà trong thời gian ngắn với chi phí hợp lý nhằm đem đến cho người dùng một đơn hàng ăn uống hài lòng nhất.              
            </p>
          </div>
          <div class="about-us_btn about-us_btn_food">
            <a href="">Liên hệ</a>
          </div>
        </div>
        <div class="col-12 col-md-8 container-fluid">
          <div class="row about-us_img about-us_img_food">
            <div class="col-6">
              <img src="../../../../packs/images/deli-food.jpg" alt="" />
            </div>
            <div class="col-6">
              <img src="../../../../packs/images/delivery-food.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="service service-food">
      <div class="container_work">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="work_title work_title_food">Hoạt động của chúng tôi</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work service_box_work_food">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../../packs/images/food.svg"
                  alt="Pole" /></noscript
                ><img
                class="lazyloaded"
                src="../../../../packs/images/food.svg"
                alt="Pole"
              />
              </div>
              <h3> Dịch vụ</h3>
              <p class="text-muted text-muted-food">
                Lựa chọn quán ăn và món ăn mà mình ưa thích ngay.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work service_box_work_food">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../../packs/images/home.svg"
                  alt="flag" /></noscript
                ><img
                class="lazyloaded"
                src="../../../../packs/images/home.svg"
                alt="flag"
              />
              </div>
              <h3>Địa điểm</h3>
              <p class="text-muted text-muted-food">
                Cho chúng tôi biết nhà ở hay văn phòng của bạn, chúng tôi sẽ giao đồ ăn cho bạn trong thòi gian ngắn nhất.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work service_box_work_food">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../../packs/images/time.svg"
                  alt="clock" /></noscript
                ><img
                class="lazyloaded"
                src="../../../../packs/images/time.svg"
                alt="clock"
              />
              </div>
              <h3>Thưởng thức</h3>
              <p class="text-muted text-muted-food">
                Hãy nắm lấy một chiếc ghế, rót cho mình một ly đồ uống và lắng
                nghe tiếng gõ cửa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container-fluid mt80">
      <div class="row">
        <div class="col-12 col-lg-5 we-do">
          <img
            src="../../../../packs/images/food-banner.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 col-lg-7 we-do_container">
          <div class="row">
            <div class="col-12">
              <div class="we-do_content we-do_content_food container">
                <h2>Chúng tôi phục vụ những món gì?</h2>
                <div class="we-do_service">
                  <ul>
                    <li class="service_box mt20">
                      <div class="icon-box icon-box-food">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="salad" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-salad fa-w-16 fa-7x"><path fill="currentColor" d="M512 240c0-49.93-29-92.82-70.87-113.9a95.42 95.42 0 0 0-77.72-60.94c-12.78-2.07-24.33-.78-36.69 2.59a112 112 0 0 0-205.84 0C103 62.88 91.19 64 84.21 65.16a95.49 95.49 0 0 0-84.08 90c-1 16 4.11 37 10.56 49.14 9 17 15.94 34.9 19.09 53.57-7.39 1.81-14.4 5-19.64 10.71a38.29 38.29 0 0 0-10 29.08c6.18 72.9 51.31 136.51 116.6 166.34 2.84 26.92 25.44 48 52.78 48H343.1c27.44 0 50.1-21.17 52.82-48.22 64.94-30 109.79-93.51 115.94-166.11.67-7.76-1.84-15.15-5.69-21.86 3.41-11.43 5.83-23.28 5.83-35.81zm-128.09-80C430 160 464 198.84 464 240c0 5.57-1.14 10.79-2.28 16H306.13c-1.14-5.21-2.27-10.43-2.27-16a80 80 0 0 1 80.05-80zM215.8 96h16a8 8 0 0 1 8 8v152h-32V104a8 8 0 0 1 8-8zM74 165.66l11.32-11.32a8 8 0 0 1 11.32 0L198.41 256h-45.28L74 177a8 8 0 0 1 0-11.34zm290 259.39l-15.81 5.73v27.5c0 3.16-2.29 5.72-5.1 5.72H169.52c-2.81 0-5.09-2.56-5.09-5.72v-27.4l-15.91-5.69C95.8 406.31 57.7 359.42 49.2 304h413.6c-8.47 55.2-46.35 102.05-98.8 121.05z" class=""></path></svg>
                      </div>
                      <div class="content-box content-box-food">
                        <h3>
                          Món ăn trưa
                          <p class="content-box_des">
                            "Trưa nay ăn gì?" luôn là câu hỏi khiến dân văn phòng phải đau đầu mỗi ngày. Để không còn băn khoăn, hãy để chúng tôi giúp bạn.
                          </p>
                        </h3>
                      </div>
                    </li>

                    <li class="service_box mt20">
                      <div class="icon-box icon-box-food">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="carrot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-carrot fa-w-16 fa-7x"><path fill="currentColor" d="M504.6 138.5c-22.9-27.6-53.4-43.4-86.4-44.8-1.6-32.1-17.1-63.4-44.7-86.3-5.9-4.9-13.1-7.4-20.4-7.4-7.2 0-14.5 2.5-20.4 7.4-27.2 22.6-43.1 53-44.6 85.8-.7 14.5 1.8 28.7 6.6 42.2-13.3-4.4-26.8-7.3-40.3-7.3-48 0-94.1 26.8-116.6 72.8L2.4 478.3c-3 6.2-3.3 13.8 0 20.5 4.1 8.3 12.4 13.1 21 13.1 3.4 0 6.9-.8 10.2-2.4L311.2 374c25-12.2 46.4-32.6 59.6-59.6 15.4-31.5 16.7-66.2 6.5-97.1 11.8 4.1 23.9 6.6 36.4 6.6 34.7 0 67-15.9 90.9-44.7 9.9-11.7 9.9-28.9 0-40.7zm-162.5 162c-9.6 19.7-25.2 35.3-44.9 44.9l-124.8 60.9c-.4-.5-.6-1.1-1.1-1.6l-32-32c-6.2-6.2-16.4-6.2-22.6 0-6.2 6.2-6.2 16.4 0 22.6l25.6 25.6-100.2 49L154 240.6l26.7 26.7c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7c6.2-6.2 6.2-16.4 0-22.6l-32-32c-.7-.7-1.7-1.1-2.5-1.7 17.1-31.5 49.4-51 85.6-51 14.9 0 29.2 3.3 42.7 9.9 23.4 11.4 41 31.3 49.5 56s6.9 51.1-4.5 74.6zM413.8 192c-21.5 0-43.1-8.9-60.6-26.5l-6.7-6.7c-37.2-37.1-35.4-92 6.6-126.8 33.2 27.5 41.5 67.6 25.3 101.6 11.2-5.3 23-8 34.9-8 24.1 0 48.3 11.1 66.7 33.3-18.3 22.1-42.3 33.1-66.2 33.1z" class=""></path></svg>
                      </div>
                      <div class="content-box content-box-food">
                        <h3>
                          Món rau củ quả
                          <p class="content-box_des">
                            Dù có “sơn hào hải vị” nhiều đến đâu thì chúng ta vẫn không thể bỏ qua được các món rau củ quả. Ở đây có những món không thể thiếu trong mỗi mâm cơm của gia đình Việt.
                          </p>
                        </h3>
                      </div>
                    </li>

                    <li class="service_box mt20">
                      <div class="icon-box icon-box-food">                        
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cocktail" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-cocktail fa-w-18 fa-7x"><path fill="currentColor" d="M391.32 128H24.68c-21.95 0-32.94 26.53-17.42 42.05L192 354.79V480h-53.33c-14.73 0-26.67 11.94-26.67 26.67 0 2.95 2.39 5.33 5.33 5.33h181.33c2.95 0 5.33-2.39 5.33-5.33 0-14.73-11.94-26.67-26.67-26.67H224V354.79l107.7-107.7 22.66-22.66 54.37-54.37c15.52-15.53 4.53-42.06-17.41-42.06zM208 325.53L42.47 160h331.06L208 325.53zM432 0c-62.55 0-114.89 40.23-134.61 96h34.31c17.95-37.68 55.83-64 100.3-64 61.76 0 112 50.24 112 112s-50.24 112-112 112c-18.49 0-35.68-4.93-51.06-12.9l-23.52 23.52C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0zm0 192c-.04 0-.08-.01-.13-.01-.2.21-.3.48-.51.69L405.04 219c8.46 3.05 17.46 5 26.96 5 44.12 0 80-35.89 80-80s-35.88-80-80-80c-26.05 0-49.01 12.68-63.62 32H432c26.47 0 48 21.53 48 48s-21.53 48-48 48z" class=""></path></svg>
                      </div>
                      <div class="content-box content-box-food">
                        <h3>
                          Thức uống
                          <p class="content-box_des">
                            Không biết bạn đã từng đến bao nhiêu quán café khác nhau và có từng cảm thấy phân vân, lưỡng lự trong việc lựa chọn ra một món đồ uống? Hãy để chúng tôi giúp bạn lựa chọn.
                          </p>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid section_outteam section_outteam_food mt80">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-us_content about-us_content_food mt80">
              <h2>Món ngon đề xuất</h2>
              <p class="about-us_des">
                Không phải lo lắng "hôm nay ăn gì" vì đã có chúng tôi giúp bạn. Dưới đây là những món ngon được chúng tôi giới thiệu với bạn.
              </p>
            </div>
            <div class="row outteam_img">
              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/01_bun-bo.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Bún bò Huế</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/02_com-tam.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Cơm Tấm</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/03_pho.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Phở</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/04_thit-kho.jpeg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Thịt kho Tàu</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/05_banh-cuon.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Bánh cuốn</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-md-4 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../../packs/images/06_com-chien.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Cơm chiên Dương Châu</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid footer_layout footer_layout_food mt80">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 footter_logo">
              <img src="../../../../packs/images/logo-light.png" alt="" />
            </div>
            <div class="col-12 col-md-8 footter_formsearch">
              <div class="row">
                <div class="col-md-4 col-12">
                  <div class="form_search-title">Gửi Yêu cầu</div>
                </div>
                <div class="col-md-8 col-12 form_search">
                  <form action="">
                    <input
                      class="email"
                      type="text"
                      name=""
                      value=""
                      placeholder="Nhâp Email..."
                    />
                    <input class="btn_Send" type="submit" value="Gửi" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_body">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 footer_content">
              <h2>Liên hệ</h2>
              <ul class="site_address">
                <li class="site_address-item">
                  <div class="address_icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-marker-alt"
                      class="svg-inline--fa fa-map-marker-alt fa-w-12"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </svg>
                  </div>
                  <div class="address_content">
                    <p>
                      123 Bà Triệu, Phường Nguyễn Du, Quận Hai Bà Trưng, Hà Nội
                    </p>
                  </div>
                </li>

                <li class="site_address-item">
                  <div class="address_icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope"
                      class="svg-inline--fa fa-envelope fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                      ></path>
                    </svg>
                  </div>
                  <div class="address_content">
                    <p>taglio@gmai.com</p>
                  </div>
                </li>

                <li class="site_address-item">
                  <div class="address_icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="phone-alt"
                      class="svg-inline--fa fa-phone-alt fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                      ></path>
                    </svg>
                  </div>
                  <div class="address_content">
                    <p>0927148486</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="container">
          <div class="row">
            <div class="col-12 copy_right-text">
              Copyright © 2021 Design by Ment Company
            </div>
          </div>
        </div>
      </div>
    </section>

    <el-dialog
      title="Gửi Yêu cầu"
      :visible="visibleModalBooking"
      top="10px"
      width="900px"
      @close="closeModal"
    >
      <HomeModal />
    </el-dialog>
  </div>
</template>

<script>
export default {};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var logo = document.getElementById("logo")
  if(typeof(logo) != 'undefined' && logo != null){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      logo.style.backgroundColor = "#010101";
    } else {
      logo.style.backgroundColor = "rgba(1, 1, 1, 0)";
    }
  }
}
</script>

<style>
</style>