<template>
    <div class="topcolumn">
    <h2>
        <a href="/">DEV Community</a>
        is a community of 801,555 amazing developers
    </h2>
    <p>
        We're a place where coders share, stay up-to-date and grow their careers.
    </p>
    <div class="btnList">
        <a href="/"  class="create">Create account</a>
        <a href="/" class="login">Log in</a>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.topcolumn {
   width: 240px;
   border:  1px solid var(--gray-bg-900);
   border-radius: 10px;
   background-color: white;
   margin-bottom: 20px;
}

.moble {
 display: none;
}

.moble .title{
    font-size: 50px;
}

h2 {
    font-weight: bolder;
    margin: 20px 13px;
    font-size: 20px;
}

h2 > a {
    color: blue;
}

.topcolumn p {
    margin: 20px 13px;
    font-size: 16px;
    line-height: 1.4;
}

.btnList {
    width: 208px;
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
}

.btnList > a {
    margin: 8px auto;
}

.btnList .create {
    width: 208px;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
}

.btnList .create:hover {
    background-color: blue;
    color: white;
}

.btnList .login {
    text-align: center;
}

@media screen and (max-width: 660px) {

 .topcolumn {
   width: 95%;
   background-color: var(--gray-bg-200);
   margin: auto;
 }

 .btnList {
    margin: auto
}

}
</style>
