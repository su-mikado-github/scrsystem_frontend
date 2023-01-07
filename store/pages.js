export const state = () => ({
    title: null,
});

export const getters = {
    title: (state) => state.title,
}

export const mutations = {
    setTitle(state, value) {
        state.title = value;
    }
}

export const actions = {
    changeInfo({ commit }, { title }) {
        commit('setTitle', title);
    },
}
