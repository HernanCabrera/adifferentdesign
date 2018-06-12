<template>
  <div class="contact">
    <section class="inicio d-flex align-items-center">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h1 class="titulo text-center">CONTACT</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="contenido my-5">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="titulo">Make an appointment today</h2>
            <p class="descripcion">Do you have any further questions or do you also want better results for your website? Give me a call +32(0)497 99 84 24 or fill out your name, e-mail address and type your message and I'll contact you within 24 hours.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="contacto my-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="8" class="mb-5">
            <div v-if="send">
              <b-alert show dismissible fade>
                <strong>Thanks!</strong> We'll contact you very shortly
              </b-alert>
            </div>
            
            <b-form @submit="onSubmit" v-if="show">
              
              <b-form-group id="exampleInputGroup2"
                            label="Name:"
                            label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Enter your name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="exampleInputGroup1"
                            label="E-mail address:"
                            label-for="exampleInput1">
                <b-form-input id="exampleInput1"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Enter your email address">
                </b-form-input>
              </b-form-group>

              <b-form-group id="exampleInputGroup3"
                            label="Your message:"
                            label-for="exampleInput3">
                <b-form-textarea id="textarea1"
                     v-model="form.text"
                     placeholder="Enter your message"
                     :rows="3"
                     :max-rows="6">
                </b-form-textarea>
              </b-form-group>

              <b-button type="submit" class="enlace" variant="primary">Send your message</b-button>
            </b-form>
          </b-col>
          <b-col cols="12" lg="4" class="text-center">
            <b-row>
              <b-col cols="6" lg="12">
                <h3>Contact details</h3>
                <p>
                  Kattendijkdok-westkaai 27
                  <br>
                  2000 Antwerpen ('t Eilandje)
                  <br>
                  +32(0)497 99 84 24
                </p>
              </b-col>
              <b-col cols="6" lg="12">
                <a href="mailto:hello@adifferentdesign.be">hello@adifferentdesign.be</a>
                <p>
                  BTW BE0826.658.645
                  <br>
                  BIC AXABBEE22
                  <br>
                  IBAN BE02 7506 5338 9940
                </p>
              </b-col>
            </b-row>
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
      form: {
        email: '',
        name: '',
        text: '',
      },
      show: true,
      send: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.send = true
    }
  }
}
</script>

<style lang="scss">

</style>
