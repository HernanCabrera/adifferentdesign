<template>
  <div>
    <nuxt/>
    <footer class="footer py-5">
      <b-container>
        <b-row class="d-flex justify-content-center align-items-center">
          <b-col cols="12" lg="2" class="mb-3 mb-lg-0">© 2014 A Different Design</b-col>
          <b-col cols="12" lg="3">Kattendijkdok-westkaai 27, 2000 Antwerpen</b-col>
          <b-col cols="12" lg="2" class="my-3 my-lg-0"><img src="~/static/add.png" alt=""></b-col>
          <b-col cols="12" lg="3"><a href="mailto:hello@adifferentdesign.be">hello@adifferentdesign.be</a></b-col>
          <b-col cols="12" lg="2" class="mt-3 mt-lg-0">
            <ul class="redes-sociales">
              <li class="red" v-for="red in redesSociales" :key="red">
                <a class="red-enlace" :href="red.url">{{ red.nombre }}</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      redesSociales: [
        {
          nombre: 'Linkedin',
          url: 'https://www.linkedin.com/pub/kristof-orts/61/320/a02'
        },
        {
          nombre: 'Twitter',
          url: 'http://twitter.com/kristoforts'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  background: #252525;
  color: #fff;
  padding: 24px;
  margin-top: 80px;
  text-align: center;
  .col-12 {
    font-size: 14px;
    font-weight: 300;
  }
  .redes-sociales {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    .red {
      padding: 0 5px;
      .red-enlace {
        color: #fff; 
      }
    }
  }
}
</style>
