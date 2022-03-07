<template>
  <header>
  <nav class="desktop">
    <div class="leftItem">
        <span v-if="ismobile < 660" class="menu" @click="clickMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aegt1xnxu0km4w412156kxyl4jxmetp0" class="crayons-icon"><title id="aegt1xnxu0km4w412156kxyl4jxmetp0">Navigation menu</title>
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
            </svg>
        </span>
        <span class="icon">
            <img class="site-logo__img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="DEV Community">
        </span>
        <form>
            <label>
            <input type="text" placeholder="search...">
            </label>
        </form>
    </div>
    <div class="rightItem">
         <span v-if="ismobile < 660" class="searchIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac1x4ejkii5yh4al3aciwjr2iqd86mby" class="crayons-icon"><title id="ac1x4ejkii5yh4al3aciwjr2iqd86mby">Search</title>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
            </svg>
        </span>
        <router-link to="/" class="login">Log in</router-link>
        <router-link to="/about" class="create">Create account</router-link>
    </div>
  </nav>
</header>
</template>

<script>

export default {
  data () {
    return {
      ismobile: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.ismobile = window.innerWidth
    })
  },
  methods: {
    clickMenu () {
      this.$store.commit('clickThisMenu')
      console.log(this.$store.state.clickMenu) // -> 1
    }
  }

}
</script>

<style scoped>
header{
   width: 100%;
   height: 56px;
   background-color: white;
}

nav {
    widows: 80%;
    display: flex;
    justify-content: space-between;
    margin: auto 16%;
}

.menu {
 display: none;
}

.leftItem {
    display: flex;
    align-items: flex-start;
    height: 56px;
    margin-left: 25px;
}

.leftItem .icon img{
    width: 50px;
    height: 40px;
}

.leftItem span{
    font-size: 30px;
    font-weight: 500;
    align-self: center;
}

.leftItem form {
    align-self: center;
}

.rightItem {
    display: flex;
    align-items: flex-start;
    height: 56px;
}

.rightItem > a {
    margin: auto 15px;
    align-self: center;
    text-decoration: none;
}

.rightItem .create {
    width: 140px;
    height: 40px;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    margin-right: 25px;
}

.rightItem .create:hover {
    background-color: blue;
    color: white;
}

.rightItem .login {
    display: block;
}

form {
    display: block;
    margin: auto 15px;
    width: 420px;
}

.searchIcon {
    display: none;
}

label {
    position: relative;
}

label:before {
  content: "";
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

input {
    padding: 10px;
    font-size: 17px;
    border: 1px solid #eee;
    border-radius: 5px;
    width: 100%;
}

/* mobile version */
@media screen and (max-width: 660px) {
  header {
    width: 100%;
    box-shadow: 0px 0px 1px black;
  }

  .menu {
    display: block;
    margin-right: 10px;
    cursor: pointer;
  }

  nav {
    width: 100%;
    margin: auto;
  }

  .leftItem {
    display: flex;
    align-items: flex-start;
    margin-left: 15px;
}

.searchIcon {
  display: block;
  align-self: center;
}

 form {
    display: none;
 }

 .rightItem .login {
    display: none;
 }

 .rightItem .create {
    margin-right: 15px;
 }
}

/** pad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  header {
    width: 100%;
  }

  nav {
    width: 100%;
    margin: auto;
  }

    .rightItem .login {
    display: block;
 }

 .rightItem .create {
    margin-right: 10px;
    font-size: 15px;
 }
}

 /**ipad over 1024  */
@media screen and (min-device-width: 1024px) and (max-device-width: 1300px) {
  header {
    width: 100%;
  }

  nav {
    width: 100%;
    margin: auto;
  }

  .rightItem .login {
    display: block;
 }

 .rightItem .create {
    margin-right: 10px;
    font-size: 15px;
 }
}

</style>
