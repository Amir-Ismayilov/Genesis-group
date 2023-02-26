<template>
  <div class="home">
    <div style="margin-top: 85px">
      <carusel/>
    </div>
    <div class="container home__offering">
      <div class="row">
        <div class="col-md-4 home_border">
          <h3 class="home__offeringTitle" style="text-align: center"> <p style="color: green">Genesis group</p>keyfiyetimiz ferqimizdi !</h3>
        </div>
        <div class="col-md-8" >
          <p style="font-size: 20px;padding: 0 15px;">
            2022-ci ildən fəaliyyət göstərən Genesis.az saytı Azərbaycanda əmlakın alqı-satqısı portalıdır. Günü-gündən
            inkişaf edən saytımızın gün ərzində minlərlə istifadəçisi olur. Portal olaraq daim inkişaf etmək əzmindəyik
            və bu səbəbdəndir ki saytımızın dizaynı, funksionallığı və qayda-qanunları yenilənir. Bu dəyişikliklərin
            hamısı saytımıza elan verən və saytımızda axtarış edən istifadəçilərin rahatlığı üçündür. Portal olaraq
            istifadəçilərimizin irad və təkliflərini diqqətlə dinləyir onları qeyd edir və növbəti dəyişikliklərimizdə
            uyğun gələnlərini tətbiq edirik. Buda saytımızın dahada istifadəyə yararlı olmasına gətirib çıxardır.
          </p>
        </div>
      </div>
    </div>
    <feauters :data="featureData"/>

    <div class="properties">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h2 class="properties__h2">
              Featured
              <b>Properties</b>
            </h2>
          </div>
          <div class="col-md-12 col-sm-12">
            <p class="properties__subtitle">
              Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in
              velit vel ipsum auctovinar.
            </p>
          </div>
        </div>

        <properties :propertiesData="propertiesData"/>


      </div>
    </div>

    <div class="home__slider">
      <CarouselPictureContent/>
    </div>
    <div class="home__banner">
      <banner/>
    </div>
  </div>
</template>

<script setup>
import {featureData, propertiesData} from '../data/data.dummy'

// @ is an alias to /src
import Carusel from '../components/Carusel'
import Feauters from '../components/Feauters'
import Properties from '../components/Properties'
import CarouselPictureContent from '../components/CarouselPictureContent'
</script>

<style>
/*.row > * {*/
/*  padding-left: 25px;*/
/*}*/
</style>
