<template>
  <ul>
    <li><router-link to="/">/</router-link></li>
    <li><router-link to="/foo">/foo</router-link></li>
    <li><router-link to="/bar">/bar</router-link></li>
  </ul>
</template>

<script>
  export default {
    name: "Link"
  }
</script>

<style>
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  ul li {
    float: left;
    margin-right: 10px;
    list-style: none;
  }
</style>
