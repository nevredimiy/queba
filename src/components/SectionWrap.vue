<template>
  <section>
    <div class="header-wrap" >
      <h3><slot name="header-3"></slot></h3>
      <h2><slot name="header-2"></slot></h2>
    </div>
    <slot name="content"></slot>

  </section>
</template>

<style>
.header-wrap{
  display: flex;
  flex-direction: column;
}
  h2, h3{
    background-color: #fff;
    display: inline;
  }
</style>
