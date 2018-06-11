<template>
  <div class="about">
    <section class="inicio">
    </section>
    <section class="personal">
      <b-container>
        <b-row class="my-5">
          <b-col cols="12" offset-lg="1" lg="4" class="mb-5 mb-lg-0 d-flex justify-content-center align-items-center">
            <img class="img-fluid img rounded-circle" src="~/static/about/about1.png" alt="">
          </b-col>
          <b-col cols="12" lg="5" class="text-center d-lg-flex justify-lg-content-center flex-lg-column">
            <h1 class="about-me">About Kristof Orts</h1>
            <p class="texto">
              Hello, my name is Kristof. I am an independent web designer from Belgium who loves pixels and code. Back in the day (2008), I studied Graphic Design in Antwerp. After graduating, I worked as an employee for several companies, which is where I got my experience and knowledge of design, CSS, HTML, JS and Drupal from. 
              <br>
              <br>
              I now reside in New York, splitting up my time between designing products, running, and enjoying a good cup of coffee.
            </p>
            <nuxt-link to="contact">Available for hire</nuxt-link>
          </b-col>
        </b-row>
        <hr>
      </b-container>
    </section>
    <section class="pasos my-5">
      <b-container>
        <b-row class="row-1">
          <b-col cols="12" lg="6" offset-lg="3">
            <h2 class="titulo text-center">Your project in 6 steps</h2>
            <p class="descripcion text-center">We believe in creating products and ideas by instinct, derived from my own aesthetic tastes and personal beliefs about how a product should look and feel after studying the problem.</p>
          </b-col>
        </b-row>
        <b-row class="mt-5 row-2">
          <b-col cols="12" lg="6">
            <b-row>
              <b-col cols="12" class="py-3" v-for="paso in primerosTres" :key="paso">
                <p class="numero">{{ paso.numero }}</p>
                <h3 class="titulo">{{ paso.titulo }}</h3>
                <p class="descripcion">{{ paso.descripcion }}</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="6">
            <b-row>
              <b-col cols="12" class="py-3" v-for="paso in losRestantes" :key="paso">
                <p class="numero">{{ paso.numero }}</p>
                <h3 class="titulo">{{ paso.titulo }}</h3>
                <p class="descripcion">{{ paso.descripcion }}</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="cita d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <p class="texto">"If you can draw it, you can build it"</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="disfruta my-5">
      <b-container>
        <b-row class="row-1">
          <b-col cols="12">
            <h3 class="titulo text-center">BESIDES DESIGNING I ALSO ENJOY</h3>
          </b-col>
        </b-row>
        <b-row class="my-5">
          <b-col v-for="item in disfruta" :key="item" cols="12 d-flex justify-content-center align-items-center flex-column" sm="6" lg="3">
            <img class="img-fluid img" :src="item.url" alt="">
            <p class="titulo mt-2">{{ item.titulo }}</p>
          </b-col>
        </b-row>
        <hr>
      </b-container>
    </section>
    <section class="cta">
      <b-container>
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
  data () {
    return {
      pasos: [
        {
          numero: 1,
          titulo: 'PROJECT INITIATION',
          descripcion: 'Kick-off meeting to consider the goals and to sketch out the trajectory of the project’s phases. Creating strong briefs and estimating the scale of a potential project.'
        },
        {
          numero: 2,
          titulo: 'ANALYZING REQUIREMENTS',
          descripcion: 'This phase will be used for user research, content strategy, usability and planning the integration process, and estimating key values in your project.'
        },
        {
          numero: 3,
          titulo: 'INFORMATION ARCHITECTURE AND USER EXPERIENCE DESIGN',
          descripcion: 'We’ll begin to figure out how the site will work. Within this phase, I will also do quick cycles of sketching and testing. The site will begin to take shape on paper.'
        },
        {
          numero: 4,
          titulo: 'VISUAL DESIGN AND PROTOTYPING',
          descripcion: 'Here I’ll begin to develop a visual language that will express and support your interaction design. The site will continue to evolve in short cycles as new directions are tried, tested and accepted, rejected or modified.'
        },
        {
          numero: 5,
          titulo: 'CONSTRUCTION AND TESTING',
          descripcion: 'This phase will overlap with the previous step. Here I will build the actual site, including the functionality and integration points that you’ll need for the final product.'
        },
        {
          numero: 6,
          titulo: 'DEPLOYMENT AND EVALUATION',
          descripcion: "Even after deployment, we'll spend time looking at what’s working and what needs modification. The working website will continue to evolve and refine."
        }
      ],
      disfruta: [
        {
          titulo: 'LEARNING',
          url: require('~/static/about/books.png')
        },
        {
          titulo: 'APPLE PRODUCTS',
          url: require('~/static/about/apple.png')
        },
        {
          titulo: 'GREAT MUSIC',
          url: require('~/static/about/music.png')
        },
        {
          titulo: 'EXPERIMENTING',
          url: require('~/static/about/exper.png')
        }
      ]
    }
  },
  computed: {
    primerosTres () {
      return this.pasos.filter((paso, indice) => indice < 3)
    },
    losRestantes () {
      return this.pasos.filter((paso, indice) => indice >= 3)
    }
  }
}
</script>

<style lang="scss">
.about {
  .inicio {
    background: url('~/static/about/bgImage6.png');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    height: 50vh;
    min-height: 440px;
  }
  .personal {
    .img {
      width: 320px;
      height: 320px;
    }
    .about-me {
      font-size: 32px;
    }
    .texto {
      font-size: 20px;
      color: #777;
      font-weight: 400;
    }
  }
  .cita {
    background: url('~/static/about/draw.png');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 196px;
    .texto {
      font-size: 35px;
      font-style: italic;
      font-weight: 300;
      color: #434343;
    }
  }
  .disfruta {
    .img {
      width: 160px;
      height: 160px;
    }
    .row-1 {
      .titulo {
        font-size: 18px;
        color: #737373;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
  .pasos {
    .row-1 {
      .titulo {
        font-weight: 300;
        font-size: 38px;
        color: #434343;
      }
      .descripcion {
      }
    }
    .row-2 {
      .numero {
        font-size: 60px;
        font-weight: 300;
        font-style: italic;
        line-height: 42px;
        float: left;
        width: 40px;
        height: 100%;
        color: #999;
      }
      .titulo {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 18px;
      }
      .descripcion {

      }
    }
  }
}
@media (max-width: 700px) {
  
}
</style>
