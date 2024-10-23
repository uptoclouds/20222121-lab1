const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const brand = ref('SE 331');
        const onSale = ref(true);
        const inventory = ref(10);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0);

        function updateVariant(index) {
            console.log(`Selected variant index: ${index}`); // 调试输出
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        const cart = ref(0);

        function addToCart() {
            cart.value += 1;
        }

        const saleMessage = computed(() => {
            return onSale.value ? `${brand.value} ${product.value} is on sale` : '';
        });

        const title = computed(() => {
            return `${brand.value} ${product.value}`;
        });

        return {
            title,
            image,
            inStock,
            inventory,
            details,
            variants,
            cart,
            addToCart,
            updateVariant,
            saleMessage
        };
    }
}).mount('#app');

