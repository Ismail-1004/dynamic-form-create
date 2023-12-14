export default {
    state: {
        forms: [
            { id: 1, author: 'user 1' },
            { id: 2, author: 'user 1' },
            { id: 3, author: 'user 1' },
        ]
    },
    getters: {
        forms: s => s.forms
    }
}