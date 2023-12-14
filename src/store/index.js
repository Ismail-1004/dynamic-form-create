import { createStore } from 'vuex'
import forms from './modules/forms'
import createForm from './modules/createForm'

export default createStore({
    modules: {
        forms,
        createForm
    }
})