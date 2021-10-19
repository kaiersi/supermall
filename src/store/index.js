import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        productList: []
    },
    mutations:{
        addProduct(state, payload){
            let oldProduct = null;
            for (const item of state.productList) {
                if(item.iid == payload.iid) {
                    oldProduct = item;
                    break;
                }
            }
            if(oldProduct) {
                oldProduct.quantity++;
            } else {
                state.productList.push(payload);
            }
            // console.log(state.productList);
            
        },
        switchCheck(state, payload){
            let target = state.productList.find(item => {
                return item.iid == payload;
            })
            console.log(target);
            target.isChecked = !target.isChecked;
        }
    },
    getters:{
        productLength: state => state.productList.length,
        productList: state => state.productList
    },
    actions:{

    }
})

export default store
