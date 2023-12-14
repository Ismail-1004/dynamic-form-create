export default {
    state: {
        fields: [],
        defaultSettings: {
            value: '',
            isRequired: false
        }
    },
    mutations: {
        createForm (state, form) {
            state.fields.push(form)
        },
        removeField (state, idx) {
            console.log(idx);
            state.fields = state.fields.filter((field, index) => index !== idx)

            console.log(state.fields);
        }
    },
    getters: {
        fields: s => s.fields,
        defaultSettings: s => s.defaultSettings
    }
}