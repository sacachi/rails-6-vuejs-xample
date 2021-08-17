<template>
<div id="header-barbers">
  <div class="banner">
    <a href="/">
      <img src="../../../../../packs/images/logo-black.png" alt="">
    </a>
  </div>
  <section class="event_banner">
    <div class="event_banner_image">
        <div class="container">
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  data(){
    return{
      value2: 5,
    }
  }
}
</script>

<style scoped>
  .event_banner_image{
    background-position: top center;
    background-position-y: 0;
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    min-height: 400px;
    background-size: cover;
  }
  .banner {
    height: 70px;
    text-align: center;
    position: fixed;
    z-index: 99;
    width: 100%;
    background-color: white;
  }
  .banner img {
    margin-top: 10px;
    height: 60px;
  }
   .event_banner_text{
    font-size: 28px;
    color: #fff;
    z-index: 10;
    background-size: cover;
    margin: auto 0;
    position: absolute;
    top: 50%;
  }

  .event_banner_text h1 {
    background: rgba(6,31,54,0.35);
    border: 1px solid white;
    padding: 20px;
  }
  .event_banner {
    padding-top: 70px;
  }
  .event_banner_image {
    background-image: url("../../../../../packs/images/JSJ5224.jpeg");
    object-fit: contain;
  }
  @media (min-width: 768px) {
    .event_banner_image{
      max-height: 400px;
    }
  }


</style>
