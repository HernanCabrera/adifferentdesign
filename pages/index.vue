<template>
  <div class="work">
    <section class="inicio d-flex align-items-center">
      <div class="fondo"></div>
      <b-container>
        <b-row>
          <b-col cols="12">
            <h1 class="titulo">DESIGN<br>IS THE<br>DIFFERENCE</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="contenido">
      <b-container class="my-5">
        <b-row>
          <b-col cols="12 text-center">
            <h2 class="titulo my-3">Creating beautiful interfaces for web and mobile</h2>
            <p class="copy">I'm a independent Designer from Belgium and I believe in making the complex simple, beautiful and a little fun. I create, develop, and improve user experiences to increase conversions and improve your business.</p>
            <nuxt-link class="enlace" to="about">Find out more about me →</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="trabajos">
      <b-container>
        <b-row class="pb-md-2">
          <b-col cols="12" md="8" class="pb-3 pb-md-0 pr-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/hajp.png">
              <nuxt-link :to="{ name: 'work-id', params: { id: 'hajp' } }" class="hover">
                <h2 class="trabajo">HAJP</h2>
                <p class="descripcion">Trendy Interior Webshop</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="pb-3 pb-md-0 pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/moatza.png">
              <nuxt-link :to="{ name: 'work-id', params: { id: 'moatza' } }" class="hover">
                <h2 class="trabajo">Moatza</h2>
                <p class="descripcion">Community Events Website</p>
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
        <b-row class="pt-md-2 pb-md-2">
          <b-col cols="12" md="4" class="pb-3 pb-md-0 pr-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/skedify.png">
              <nuxt-link :to="{ name: 'work-id', params: { id: 'skedify' } }" class="hover">
                <h2 class="trabajo">Skedify</h2>
                <p class="descripcion">Online Calendar App</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="8" class="pb-3 pb-md-0 pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/boonants.png">
              <nuxt-link :to="{ name: 'work-id', params: { id: 'boonants' } }" class="hover">
                <h2 class="trabajo">Boonants</h2>
                <p class="descripcion">Trendy Shoes Webshop</p>
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
        <b-row class="pt-md-2">
          <b-col cols="12" md="8" class="pb-3 pb-md-0 pr-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/pidgon.png">
              <nuxt-link :to="{ name: 'work-id', params: { id: 'pidgon' } }" class="hover">
                <h2 class="trabajo">Pidgon</h2>
                <p class="descripcion">Social Platform For Basketball</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/brussels.png">
              <a class="hover">
                <h2 class="trabajo">Brussels Airlines</h2>
                <p class="descripcion">Charity Projects Website</p>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="testimonial my-5">
      <b-container>
        <b-row class="text-center text-lg-left">
          <b-col lg="3" offset-lg="2" class="text-lg-right">
            <img class="img-fluid img" src="~/static/test1.png">
          </b-col>
          <b-col cols="12" lg="5" class="d-flex align-items-center pt-4 py-lg-0">
            <p class="copy ">
              “Kristof krijgt heel snel voeling met wat de klant wil. Op basis van een beperkte briefing slaagt hij er elke keer opnieuw in om met een gepast ontwerp aan te komen. Werken van op afstand is ook geen probleem met Kristof.”
              <br>
              <small class="autor">Matthieu Voet — Newance</small>
            </p>
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
            <nuxt-link class="enlace" to="contact">Make an appointment today →</nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
