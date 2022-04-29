import store from '../store.js'


export default {
    name: 'linkComponent',


    setup() {
        return {store};
    },

    
    template: `
      <div>
        <a href="/progs/boid/index.html">Boids!</a>
      </div>
    `,
};