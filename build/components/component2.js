import store from '../store.js'

export default {
    name: 'Two',
    
    props: {
        message: String,
    },
    
    setup(props) {
        const {onMounted} = Vue;

        onMounted(() => {
            if (props.message) store.message = props.message;
        })

        return {store};
    },
   

    template: `
        <div>
            div 2
        </div>
    `,
};