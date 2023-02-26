<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-fill container p-0" >
      <div class="row">
        <slot></slot>
      </div>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "mainContainer"
}
</script>