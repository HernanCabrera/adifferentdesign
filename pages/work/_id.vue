<template>
  <div class="work-id" v-if="trabajo && trabajo.nombre">
    <section class="inicio" :style="{ backgroundImage: 'url(' + trabajo.imgFondo + ')' }">
    </section>
    <section class="work my-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="4" class="mb-5">
            <h1 class="titulo text-center py-4">{{ trabajo.nombre }}</h1>
            <p class="descripcion mt-3">{{ trabajo.descripcion }}</p>
            <h2 class="client">Client: {{ trabajo.cliente }}</h2>
            <ul>
              <li v-for="habilidad in trabajo.listaDeHabilidades" :key="habilidad">
                {{ habilidad }}
              </li>
            </ul>
            <nuxt-link to="/">Back to overview</nuxt-link>
          </b-col>
          <b-col cols="12" lg="8">
            <b-row>
              <b-col cols="12" class="pb-4" v-for="img in trabajo.imgTrabajos" :key="img">
                <img class="img-fluid" :src="img" alt="">
                <!-- {{ img }} -->
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="cta">
      <b-container>
        <hr>
        <b-row class="my-5 text-center">
          <b-col cols="12">
            <h2 class="titulo">Let’s create something together</h2>
            <p class="copy my-3">A website should be user friendly, functional and beautiful. But most of all it should increase conversions and make your business grow. Let's grab a coffee and discuss your new project.</p>
            <nuxt-link class="enlace" to="/contact">Make an appointment today →</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      trabajo: {}
    }
  },
  mounted () {
    this.setTrabajo(this.$route.params.id)
    this.trabajo = this.encontrarTrabajo
  },
  computed: {
    ...mapGetters(['encontrarTrabajo'])
  },
  methods: {
    ...mapMutations(['setTrabajo'])
  }
}
</script>

<style lang="scss">

</style>
