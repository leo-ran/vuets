import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)


interface UserState  {
    name: string
}

interface RootState {
    now: string;
    user: object;
}

export default new Vuex.Store({
    state: {
        now: new Date().toLocaleString(),
        user: {
            name: '呵呵'
        }
    },
    getters: {
        now: (state: RootState) => state.now
    },
    mutations: {
        changeNow: (state: RootState, param: string) => {
            state.now = param
        }
    },
    actions: {
        ACTION_CHANGE_NOW: ({commit}, param: string) => {
            commit('changeNow', param)
        }
    },
    modules: {
        userx: {
            namespaced: true,
            state: {
                name: 'zhangsan'
            },
            getters: {
                name: (state: UserState): string => state.name
            },
            mutations: {
                changeName: (state: UserState, param: string): void => {
                    state.name = param
                }
            },
            actions: {
                ACTION_CHANGE_NAME: ({ commit }, param: string) => {
                    commit('changeName', param)
                }
            }
        }
    }
})