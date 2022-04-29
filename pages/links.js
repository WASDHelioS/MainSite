import linkComponent from '../components/linkComponent.js'

export default {
    name: 'links',
    components: {linkComponent},

    setup() {        
        const title = 'Page One'
        return {title}
    },

    template: `
        <div>
            <linkComponent></linkComponent>
        </div>
    `,
};