import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      trabajoActual: '',      
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
    },
    mutations: {
      setTrabajo (state, payload) {
        state.trabajoActual = payload
      }
    },
    getters: {
      encontrarTrabajo (state) {
        return state.trabajos.find((trabajo) => trabajo.nombre.toLocaleLowerCase() === state.trabajoActual.toLocaleLowerCase())
      }
    }
  })
}

export default createStore