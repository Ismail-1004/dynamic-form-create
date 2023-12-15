export default {
    state: {
        fields: [],
        forms: [],
        defaultSettings: {
            value: '',
            isRequired: false
        },

    },
    mutations: {
        createForm (state, field) {
            state.fields.push(field)
        },
        removeField (state, idx) {
            state.fields = state.fields.filter((field, index) => index !== idx)
        },
        saveForm (state) {
            state.forms.unshift({id: Date.now(), fields: [...state.fields]})
            console.log(state.forms);
        },
        resetFields (state) {
            state.fields = []
        }
    },
    getters: {
        fields: s => s.fields,
        defaultSettings: s => s.defaultSettings,
        forms: s => s.forms
    }
}