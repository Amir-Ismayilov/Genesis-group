<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/slide_1.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>ALTES PLASA, Azerbaijan|Baku</h5>
          <p>97,000 ₼ başlayaraq</p>
          <button type="button" class="btn btn-outline-dark" style="color: white; font-size: 20px">Ətraflı məlumat</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/images/slide_2.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>JASMINE PARK, Azerbaijan|Baku</h5>
          <p>75,000 ₼ başlayaraq</p>
          <button type="button" class="btn btn-outline-dark" style="color: white; font-size: 20px">Ətraflı məlumat</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/images/slide.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h5>120 Anastasia Avenue, Coral Gables</h5>
          <p>$625,000</p>
          <button type="button" class="btn btn-outline-dark" style="color: white; font-size: 20px">Ətraflı məlumat</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </template>

<script>
export default {
  name: "CaruselContainer"
}
</script>

<style lang="scss">
.carousel-indicators{
  bottom: 25%;
}
.carousel-item>img{
  height: auto;
  width: 100% !important;
}
</style>