<template>
  <div>
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
              <nuxt-link to="/" class="hover">
                <h2 class="trabajo">HAJP</h2>
                <p class="descripcion">Trendy Interior Webshop</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="pb-3 pb-md-0 pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/moatza.png">
              <nuxt-link to="/" class="hover">
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
              <nuxt-link to="/" class="hover">
                <h2 class="trabajo">Skedify</h2>
                <p class="descripcion">Online Calendar App</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="8" class="pb-3 pb-md-0 pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/boonants.png">
              <nuxt-link to="/" class="hover">
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
              <nuxt-link to="/" class="hover">
                <h2 class="trabajo">Pidgon</h2>
                <p class="descripcion">Social Platform For Basketball</p>
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="pl-md-2">
            <div class="contenedor-img">
              <img class="img-fluid" src="~/static/work/brussels.png">
              <nuxt-link to="/" class="hover">
                <h2 class="trabajo">Brussels Airlines</h2>
                <p class="descripcion">Charity Projects Website</p>
              </nuxt-link>
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
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Source Sans Pro', sans-serif;
  color: #333;
}
.img-fluid {
  width: 100%;
  height: 100%;
}
.inicio {
  // margin: 15px;
  position: relative;
  height: 100vh;
  .fondo {
    background-image: url('~/static/bgImage7.png');
    background-size: cover;
    background-position: 50% 0%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .titulo {
    color: #fff;
    font-weight: 900;
    font-size: 92px;
    font-family: 'Ropa Sans', sans-serif;
    line-height: 92px;
    text-transform: uppercase;
  }
}
.contenido {
  .titulo {
    font-size: 28px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
  .copy {
    font-size: 24px;
    line-height: 36px;
    color: #777;
    font-weight: 400;
  }
  .enlace {
    
  }
}

.trabajos {
  .contenedor-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    &:hover {
      .hover {
        opacity: 1;
      }
      .img-fluid {
        transform: scale(1.1);
      }
    }
    .hover {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      text-decoration: none;
      opacity: 0;
      transition: .5s;
      .trabajo {
        font-size: 38px;
        font-weight: 200;
        text-align: center;
      }
      .descripcion {
        font-size: 22px;
        text-align: center;
      }
    }
  }
  .img-fluid {
    transition: .3s;
  }
}

.testimonial {
  .img {
    max-width: 180px;
    max-height: 180px;
  }
  .copy {
    font-size: 18px;
    line-height: 28px;
    color: #777;
    font-weight: 400;
    .autor {

    }
  }
}
.cta {
  .titulo {
    font-size: 28px;
  }
  .copy {
    font-size: 24px;
    line-height: 36px;
    color: #777;
    font-weight: 400;
  }
  .enlace {
    background: #4ea2ed;
    padding: 24px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    border: 0 none;
    display: inline-block;
    border-bottom: 2px solid #466b8c;
    letter-spacing: 1px;
    border-radius: 0;
    text-decoration: none;
    color: #fff;
    transition: .3s;
    &:hover {
      background: #3071a9;
    }
  }
}
@media (max-width: 480px) {
  .inicio {
    margin: 0;
    .fondo {
      background-image: url('~/static/bgImage5.png');
    }
    .titulo {
      text-align: center;
      font-size: 54px;
      line-height: 70px;
    }
  }
}
</style>
