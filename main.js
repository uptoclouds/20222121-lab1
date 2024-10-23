const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id) {
            cart.value.push(id);
        }
        return {
            cart,
            premium,
            updateCart
        }
    }
})

app.component('product-display', productDisplay);
app.component('review-form',reviewForm);
app.component('review-list',reviewList);
app.mount('#app')

