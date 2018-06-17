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

import { mapGetters } from 'vuex'

export default {
  name: 'Work-ID',
  data () {
    return {
      trabajos: [
        {
          nombre: 'HAJP',
          descripcion: 'HAJP is an webshop is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
          cliente: 'Newance',
          listaDeHabilidades: [
            'eCommerce',
            'Web Design',
            'UX Design'
          ],
          imgFondo: require('~/static/work/hajp/hajp-cover.png'),
          imgTrabajos: [
            require('~/static/work/hajp/hajp.png'),
            require('~/static/work/hajp/hajp-lg1.png')
          ]
        },
        {
          nombre: 'Moatza',
          descripcion: 'Moatza is a community website that helps people in New York find events and strengthen the community engagement and the Israeli and Jewish identity. Moatza Mekomit New York has already carried out over 30 programs, including events, projects and collaboration.',
          cliente: 'NANO',
          listaDeHabilidades: [
            'Responsive Design',
            'Web Design',
            'UX Design'
          ],
          imgFondo: require('~/static/work/moatza/moatza-cover.png'),
          imgTrabajos: [
            require('~/static/work/moatza/moatza-lg1.png'),
            require('~/static/work/moatza/moatza-lg2.png')
          ]
        },
        {
          nombre: 'Skedify',
          descripcion: 'Skedify is a startup from Gent that want to make online appointments easier.',
          cliente: 'Skedify',
          listaDeHabilidades: [
            'UX Design',
            'Interface Design',
            'Responsive Design'
          ],
          imgFondo: require('~/static/fondo-negro.png'),
          imgTrabajos: [
            require('~/static/work/skedify/skedify.png')
          ]
        },
        {
          nombre: 'Boonants',
          descripcion: 'Shoes Boonants is an online webshop with stylish trendy shoes for kids, women and men.',
          cliente: 'Newance',
          listaDeHabilidades: [
            'Web Design',
            'UX Design',
            'eCommerce'
          ],
          imgFondo: require('~/static/fondo-negro.png'),
          imgTrabajos: [
            require('~/static/work/boonants/boonants.png'),
          ]
        },
        {
          nombre: 'Pidgon',
          descripcion: 'Pidgon is a startup that connects basketball fans with teams and provides an online precence for clubs. They also provide several solutions and tools including basketball apps for iOS.',
          cliente: 'Pidgon',
          listaDeHabilidades: [
            'UX Design',
            'Wireframing',
            'Interface Design',
            'Front-end Development',
            'Responsive Design'
          ],
          imgFondo: require('~/static/work/pidgon/pidgon-cover.png'),
          imgTrabajos: [
            require('~/static/work/pidgon/pidgon.png'),
            require('~/static/work/pidgon/pidgon-lg2.png'),
            require('~/static/work/pidgon/pidgon-lg1.png'),
            require('~/static/work/pidgon/pidgon-lg3.png'),
            require('~/static/work/pidgon/pidgon-lg4.png'),
          ]
        }
      ]
    }
  },
  computed: {
    trabajo () {
      return this.trabajos.find((trabajo) => trabajo.nombre.toLocaleLowerCase() === this.$route.params.id.toLocaleLowerCase())
    }
  }
}
</script>

<style lang="scss">

</style>
