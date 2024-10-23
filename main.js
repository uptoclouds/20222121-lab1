const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id) {
            cart.value.push(id);
        }
        function addReview(review){
            reviews.value.push(review);
        }
        return {
            cart,
            premium,
            updateCart,
            addReview
        }
    }
})

app.component('product-display', productDisplay)
app.component('review-list',reviewList)

app.mount('#app')
