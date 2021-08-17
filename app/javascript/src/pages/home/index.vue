<template>
  <div id="home-page">
    <section class="logo">
      <div class="container-fluid background_logo" id="logo">
        <a class="img_logo" href="/">
          <img src="../../../packs/images/logo-light.png" alt="" />
        </a>
      </div>
    </section>

    <section class="container-fluid container_slide">
      <router-link :to="{ name: 'frontBarbers' }">
        <el-button class="button-order order-barber" type="success">ĐẶT THỢ NGAY</el-button>
      </router-link>
      <router-link :to="{ name: 'AdminSignUp' }">
        <span class="btn btn-success button-order order-food">
          Hợp tác
        </span>
      </router-link>
      <VueSlickCarousel
        :arrows="true"
        :dots="false"
        :slidesToShow="1"
        :slidesToScroll="1"
        :autoplay="true"
        :autoplaySpeed="5000"
      >
        <!-- <div>
          <img
            class="img-slide-banner"
            src="../../../packs/images/slider-banner1.jpg"
          />
        </div> -->
        <div>
          <img
            class="img-slide-banner"
            src="../../../packs/images/slider-banner2.jpg"
          />
        </div>
      </VueSlickCarousel>
        <h2 class="text-header">
          Giải pháp tốt nhất cho vấn đề cắt tóc trong mùa COVID-19 <br>
          <span class="text-header-small">
          Dịch vụ chuyên nghiệp, sạch sẽ, nhanh chóng và an toàn tránh khỏi COVID-19 ngay tại ngôi nhà của bạn.
        </span>
        </h2>
    </section>
    <section class="container about-us mt80">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="about-us_content">
            <h2>Về Chúng Tôi</h2>
            <p class="about-us_des">
              Chúng tôi chuyên về tạo kiểu tóc hiện đại và cổ điển, màu sắc và
              dầu gội được cung cấp với các kỹ năng kỹ thuật xứng tầm với các
              salon cao cấp, nhưng với mức giá hợp lý hơn nhiều.
            </p>
          </div>
          <div class="about-us_content1">
            <p>
              Taglio giúp bạn kết nối hàng ngàn thợ cắt tóc,thợ làm móng (Nail).
              Đây là cách tốt hơn để đặt chỗ cắt tóc Tận nhà, Công Ty,... Dịch
              vụ làm tóc sạch sẽ và chuyên nghiệp giữ bạn an toàn khỏi COVID
              trong sự thoải mái tại nhà của bạn.
            </p>
          </div>
          <div class="about-us_btn">
            <a href="">Liên hệ</a>
          </div>
        </div>
        <div class="col-12 col-md-8 container-fluid">
          <div class="row about-us_img">
            <div class="col-6">
              <img src="../../../packs/images/figure1.jpg" alt="" />
            </div>
            <div class="col-6">
              <img src="../../../packs/images/figure2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="service">
      <div class="container_work">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="work_title">Hoạt động của chúng tôi</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../packs/images/pole.svg"
                  alt="Pole" /></noscript
                ><img
                class="lazyloaded"
                src="../../../packs/images/pole.svg"
                alt="Pole"
              />
              </div>
              <h3>Tư vấn &amp; Dịch vụ</h3>
              <p class="text-muted">
                Khám phá và trao đổi với chúng tôi tại nơi bạn sống. Chúng tôi
                cung cấp dịch vụ cắt tóc, tạo kiểu tóc và làm móng tại nhà .
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../packs/images/flag.svg"
                  alt="flag" /></noscript
                ><img
                class="lazyloaded"
                src="../../../packs/images/flag.svg"
                alt="flag"
              />
              </div>
              <h3>Địa điểm &amp; Thời gian</h3>
              <p class="text-muted">
                Thợ làm tóc của chúng tôi sẽ đến ngay. Đặt lịch cắt tóc tại nhà
                hoặc văn phòng của bạn và thanh toán trực tiếp.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 text-center">
            <div class="service_box_work">
              <div class="service_img">
                <noscript
                ><img
                  src="../../../packs/images/clock.svg"
                  alt="clock" /></noscript
                ><img
                class="lazyloaded"
                src="../../../packs/images/clock.svg"
                alt="clock"
              />
              </div>
              <h3>Tận hưởng &amp; Thư giãn</h3>
              <p class="text-muted">
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
            src="../../../packs/images/service-banner.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-12 col-lg-7 we-do_container">
          <div class="row">
            <div class="col-12">
              <div class="we-do_content container">
                <h2>Chúng tôi đã và đang làm những gì?</h2>
                <div class="we-do_service">
                  <ul>
                    <li class="service_box mt20">
                      <div class="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="cut"
                          class="svg-inline--fa fa-cut fa-w-14"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M278.06 256L444.48 89.57c4.69-4.69 4.69-12.29 0-16.97-32.8-32.8-85.99-32.8-118.79 0L210.18 188.12l-24.86-24.86c4.31-10.92 6.68-22.81 6.68-35.26 0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c4.54 0 8.99-.32 13.36-.93L142.29 256l-32.93 32.93c-4.37-.61-8.83-.93-13.36-.93-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-12.45-2.37-24.34-6.68-35.26l24.86-24.86L325.69 439.4c32.8 32.8 85.99 32.8 118.79 0 4.69-4.68 4.69-12.28 0-16.97L278.06 256zM96 160c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm0 256c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"
                          ></path>
                        </svg>
                      </div>
                      <div class="content-box">
                        <h3>
                          Cắt tóc
                          <p class="content-box_des">
                            Đảm nhận vai trò xây dựng hình ảnh, phong cách cá
                            nhân cho khách hàng dựa trên tính cách, môi trường
                            làm việc và cả yêu cầu của khách hàng. Một mái tóc
                            phù hợp không những làm đẹp mà còn góp phần che đi
                            khuyết điểm, tôn lên ưu điểm của khuôn mặt
                          </p>
                        </h3>
                      </div>
                    </li>

                    <li class="service_box mt20">
                      <div class="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="hire-a-helper"
                          class="svg-inline--fa fa-hire-a-helper fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M443.1 0H71.9C67.9 37.3 37.4 67.8 0 71.7v371.5c37.4 4.9 66 32.4 71.9 68.8h372.2c3-36.4 32.5-65.8 67.9-69.8V71.7c-36.4-5.9-65-35.3-68.9-71.7zm-37 404.9c-36.3 0-18.8-2-55.1-2-35.8 0-21 2-56.1 2-5.9 0-4.9-8.2 0-9.8 22.8-7.6 22.9-10.2 24.6-12.8 10.4-15.6 5.9-83 5.9-113 0-5.3-6.4-12.8-13.8-12.8H200.4c-7.4 0-13.8 7.5-13.8 12.8 0 30-4.5 97.4 5.9 113 1.7 2.5 1.8 5.2 24.6 12.8 4.9 1.6 6 9.8 0 9.8-35.1 0-20.3-2-56.1-2-36.3 0-18.8 2-55.1 2-7.9 0-5.8-10.8 0-10.8 10.2-3.4 13.5-3.5 21.7-13.8 7.7-12.9 7.9-44.4 7.9-127.8V151.3c0-22.2-12.2-28.3-28.6-32.4-8.8-2.2-4-11.8 1-11.8 36.5 0 20.6 2 57.1 2 32.7 0 16.5-2 49.2-2 3.3 0 8.5 8.3 1 10.8-4.9 1.6-27.6 3.7-27.6 39.3 0 45.6-.2 55.8 1 68.8 0 1.3 2.3 12.8 12.8 12.8h109.2c10.5 0 12.8-11.5 12.8-12.8 1.2-13 1-23.2 1-68.8 0-35.6-22.7-37.7-27.6-39.3-7.5-2.5-2.3-10.8 1-10.8 32.7 0 16.5 2 49.2 2 36.5 0 20.6-2 57.1-2 4.9 0 9.9 9.6 1 11.8-16.4 4.1-28.6 10.3-28.6 32.4v101.2c0 83.4.1 114.9 7.9 127.8 8.2 10.2 11.4 10.4 21.7 13.8 5.8 0 7.8 10.8 0 10.8z"
                          ></path>
                        </svg>
                      </div>
                      <div class="content-box">
                        <h3>
                          Làm móng
                          <p class="content-box_des">
                            Giúp bạn có những móng tay, móng chân xinh, đẹp, cá
                            tính hoặc dễ thương. Che khuyết điểm ở móng tay,
                            móng chân một cách dễ dàng, đẹp.
                          </p>
                        </h3>
                      </div>
                    </li>

                    <li class="service_box mt20">
                      <div class="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="user-alt"
                          class="svg-inline--fa fa-user-alt fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
                          ></path>
                        </svg>
                      </div>
                      <div class="content-box">
                        <h3>
                          Tạo kiểu tóc
                          <p class="content-box_des">
                            Đảm nhận vai trò xây dựng hình ảnh, phong cách cá
                            nhân cho khách hàng dựa trên tính cách, môi trường
                            làm việc và cả yêu cầu của khách hàng. Một mái tóc
                            phù hợp không những làm đẹp mà còn góp phần che đi
                            khuyết điểm, tôn lên ưu điểm của khuôn mặt
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

    <section class="container-fluid section_outteam mt80">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="about-us_content mt80">
              <h2>Thành viên của chúng tôi</h2>
              <p class="about-us_des">
                Đội ngũ nhân viên của chúng tôi là những người trẻ trung, nhiệt
                huyết, giỏi về chuyên môn, tận tình với công việc, luôn đoàn kết
                gắn bó tạo ra sự hài lòng của khách hàng.
              </p>
            </div>
            <div class="row outteam_img">
              <div class="col-6 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../packs/images/01_Team-395x395.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Mark Liuw</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../packs/images/02_Team-395x395.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Mark Liuw</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../packs/images/03_Team-395x395.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Mark Liuw</h1>
                      <p>
                        There are many variations of passages available but the
                        to suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 outteam_user">
                <div class="flip-card-inner1">
                  <div class="flip-card-front1">
                    <img
                      src="../../../packs/images/04_Team-395x395.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="flip-card-back1">
                    <div class="outtem_infor">
                      <h1>Mark Liuw</h1>
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
          <div class="col-12 col-md-6">
            <img
              src="../../../packs/images/team-banner.png"
              style="
                text-align: center;
                margin: 0 auto;
                display: block;
                width: 100%;
                height: 100%;
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid footer_layout mt80">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 footter_logo">
              <img src="../../../packs/images/logo-light.png" alt="" />
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
            <div class="col-12 col-md-6 footer_content">
              <h2>Dịch vụ của chúng tôi</h2>
              <ul class="menu_best_service">
                <li
                  class="menu_item"
                  v-for="(service, index) in servicesFront"
                  :key="index"
                >
                  <a class="menu_link" href=""
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-right"
                      class="svg-inline--fa fa-chevron-right fa-w-10"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                      ></path></svg
                    >{{ service.name }}</a
                  >
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import HomeModal from "./partial/modal";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: { VueSlickCarousel, HomeModal },
  mounted() {
    this.fetchFrontServiceCharges();
    this.fetchServicesFront();
  },
  computed: {
    ...mapGetters([
      "visibleModalBooking",
      "frontServiceCharges",
      "editBooking",
      "serviceCharges",
      "servicesFront",
    ]),
  },
  methods: {
    ...mapMutations("booking", [
      "SET_VISIBLE_MODAL_BOOKING",
      "SET_EDIT_BOOKING",
    ]),
    ...mapActions("serviceCharge", ["fetchFrontServiceCharges"]),
    ...mapActions("service", ["fetchServicesFront"]),
    registrationBooking() {},
    closeModal() {
      this.SET_VISIBLE_MODAL_BOOKING(false);
    },
  },
};
window.onscroll = function () { scrollFunction() };

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

<style lang="scss">
// #home-page {
//   .button-order {
//     position: absolute;
//     z-index: 1;
//     width: 170px;
//     height: 50px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
</style>
