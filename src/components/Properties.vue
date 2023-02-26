<template>
  <div class="row d-flex justify-content-between">
    <div class="col-md-4 col-sm-12 properties__col" v-for="property in propertiesData" :key="property.id">
      <img :src="require(`@/assets/images/${property.image}.png`)" :alt="property.desc.sqft" class="properties__img" />
      <h4 class="properties__h4">{{ `${property.desc.sqft} ${property.title}` }}</h4>
      <p class="properties__sub">{{ property.subtitle }}</p>
      <p class="properties__price">${{ property.price.toFixed(3) }}</p>
      <ul class="properties__desc">
        <li class="properties__item">{{ property.desc.sqft }} Sq Ft</li>
        <li class="properties__item">{{ property.desc.rooms }} Bedrooms</li>
        <li class="properties__item">{{ property.desc.bath }} Bathroom</li>
      </ul>
    </div>
    <div class="col-md-12 col-sm-8"><button type="button" class="btn btn-primary properties__more">BÜTÜN ELANLAR</button></div>
  </div>
</template>

<script>
export default {
  name: 'PropertiesComponents',
  props: {
    propertiesData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>