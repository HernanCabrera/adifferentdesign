<template>
  <div class="vistas">
    
      <b-navbar toggleable="md" type="light" fixed="top" class="py-0 px-0" :class="{ 'margen-color': (scrolledY || maxWidth) }">
        <b-container class="py-1 py-md-3 px-3">
          <b-navbar-brand>
            <nuxt-link to="/">
              <img src="~/static/logo.png">
              <img class="ml-3 d-none d-md-inline" src="~/static/type.png">
            </nuxt-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="mr-auto">
              <nuxt-link class="ruta px-3 py-2" to="/" exact active-class="activo">WORK</nuxt-link>
              <nuxt-link class="ruta px-3 py-2" to="about" active-class="activo">ABOUT</nuxt-link>
              <nuxt-link class="ruta px-3 py-2" to="contact" active-class="activo">CONTACT</nuxt-link>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    
    
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
              <li class="red" v-for="(red, indice) in redesSociales" :key="red + indice">
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
      ],
      scrolledY: false,
      maxWidth: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolledY = window.scrollY > 199
    },
    handleWidth () {
      this.maxWidth = window.innerWidth < 768
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted () {
    this.handleWidth()
    this.handleScroll()
    window.addEventListener('resize', this.handleWidth);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleWidth);
  }
}
</script>