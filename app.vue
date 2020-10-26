<template>
  <Toolbar class="topbar">
    <template v-slot:left>
      <img :src="logo"/>
      <span class="spacer"/>
      <h3>Approach Zero</h3>
    </template>

    <template v-slot:right>
      <i class="las la-sun"></i>
      <span class="spacer"/>
      <InputSwitch v-model="nightTheme"/>
      <span class="spacer"/>
      <i class="las la-moon"></i>
    </template>
  </Toolbar>
  
  <css-doodle class="doodle rellax" data-rellax-speed="3">
    @grid: 40x2 / 60%;
    @place-cell: center;
    @size: calc(100% / @size * @i);

    transform: rotate(calc(@i * 5deg));

    border-radius: 30%;
    border: 1px solid hsla(
      calc(10 + 4 * @i), 70%, 68%, @r.8
    );
  </css-doodle>

  <div class="p-d-flex p-jc-center fullheight">
    <div class="p-as-center loginbox rellax" data-rellax-speed="-2">
      <img :src="panda_image" class="panda"/>
      <Card>
        <template v-slot:header>
          <div class="cardhead">
          </div>
        </template>

        <template v-slot:title>
        Login
        </template>

        <template v-slot:content>
          <div class="p-fluid">

            <div class="p-field">
              <label for="username">Username</label>
              <InputText type="text" v-model="username"
               @focus="panda_image=panda_username"
               @blur="panda_image=panda_normal"/>
            </div>

            <div class="p-field">
              <label for="username">Password</label>
              <InputText type="password" v-model="password"
               @focus="panda_image=panda_password"
               @blur="panda_image=panda_normal"/>
            </div>

          </div>
        </template>

        <template v-slot:footer>
          <div class="p-grid p-jc-end">
            <Button label="Login" class="p-mr-2 p-mb-2"/>
          </div>
        </template>
      </Card>
    </div>
  </div>

</template>

<script>
const Rellax = require('rellax')

module.exports = {
  mounted: function() {
    this.attachDefaultTheme()
    new Rellax('.rellax')
  },

  watch: {
    nightTheme: function (becomeNightTheme, _) {
      if (becomeNightTheme) {
        this.changeTheme('night.css')
      } else {
        this.changeTheme('light.css')
      }
    }
  },

  data: function() {
    const panda_normal = require('./resource/panda-normal.png')
    const panda_username = require('./resource/panda-username.png')
    const panda_password = require('./resource/panda-password.png')
    return {
      panda_normal, panda_username, panda_password,
      panda_image: panda_normal,
      logo: require('./resource/logo.png'),
      nightTheme: false,
      username: '',
      password: ''
    }
  },

  methods: {
    changeTheme(cssFile) {
      let theme = document.getElementById("theme")
      theme.href = cssFile
    },

    attachDefaultTheme() {
      const theme = document.createElement('link')
      theme.type = "text/css"
      theme.rel = "stylesheet"
      theme.id = "theme"
      theme.href = 'light.css' /* default */
      document.head.appendChild(theme)
    }
  }
}
</script>

<style>
.topbar {
  position: fixed;
  top: 0;
  width: 100%;
}

.loginbox {
  position: relative;
}

.doodle {
  position: absolute;
  right: 10%;
  bottom: 0;
  z-index: -1;
}

.cardhead {
  width: 100%;
  height: 10px;
}

.fullheight {
  height: 100%;
}

.panda {
  position: absolute;
  z-index: 1;
  top: -20%;
  left: 50%;
  width: 120px;
  height: 95px;
  transform: translate(-50%, 0);
}

body {
  background-image: url("./resource/stars.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
