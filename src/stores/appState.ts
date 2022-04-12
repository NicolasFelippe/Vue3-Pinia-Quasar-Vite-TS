import { defineStore } from 'pinia';
import ExampleService from '../services/ExampleService'
interface AppState {
    counter: number
}

export const useAppState = defineStore('appState', {
    state: () => {
        return {
            counter: 0
        } as AppState
    },
    getters: {
        getCounter: (state: AppState) => state.counter
    },
    actions: {
        addCount(number: number) {
            this.counter += number
        },
        async getCounterFromApi(){
            const response = await ExampleService.get()
            this.counter = response.data.counter
        }
    }
});