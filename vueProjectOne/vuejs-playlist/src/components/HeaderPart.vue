<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add New Blog</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}
.router-link-active {
  background: white;
  color: #000;
}
</style>
