const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref({});
        const premium = ref(false);
        
        function updateCart(id) {
            if (!cart.value[id]) {
                cart.value[id] = 0; // 初始化数量为0
            }
            cart.value[id]++;
        }

        function removeCart(id) {
            if (cart.value[id]) {
                cart.value[id]--;
                if (cart.value[id] <= 0) {
                    delete cart.value[id]; // 数量为0时删除
                }
            }
        }

        return {
            cart,
            premium,
            updateCart,
            removeCart
        };
    }
});

app.component('product-display', productDisplay);
app.component('product-details',productDetails);
app.component('review-form',reviewForm);
app.component('review-list',reviewList);
app.mount('#app')

