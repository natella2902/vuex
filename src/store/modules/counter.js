export default {
    namespaced: true,
    state () {
        return {
            count: 1
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        add (state, payload) {
            state.count += payload.value
        }
    },
    actions: {
        // we can provide only { commit }, not hole object - context
        asyncIncrement ({ commit }, payload) {
            setTimeout(() => {
                //    context.commit('add', payload.value)
                commit('add', payload)
            }, payload.duration)
        }
    },
    getters: {
        counter(state) {
            // if (state.count > 30) {
            //     return state.count + '!'
            // } else {
            //     return state.count
            // }
            return state.count
        },
        dblCounter(_, getters) {
            return getters.counter * 2
        }
    }
}