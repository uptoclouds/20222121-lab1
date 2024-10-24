const productDisplay = {
    template:
        /*html*/
        `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image">
                </div>
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p>
                    <a v-bind:href="productLink" target="_blank">To camt(lab 3.6)</a>
                </p>
                <p v-if="onSale" class="sale">On Sale(lab 4.9)</p>
                <p v-else class="not-sale">Not on Sale(lab 4.9)</p>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div class="sizes">
                    <h3>lab 5.5 Size: {{ currentSizes }}</h3>
                </div>
                <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                    class="color-circle" :style="{backgroundColor: variant.color}">
                </div>
                <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To
                    Cart</button>
                <button class="button" @click="toggleStockStatus">lab 6.7 Toggle Stock Status</button>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>
    `,
    props: {
        premium: Boolean
    },
    setup(props, { emit }) {
        const shipping = computed(()=>{
            if (props.premium){
                return 'Free'
            } else {
                return 30
            }
           
        })
        const product = ref('Boots')
        const brand = ref('SE 331')
        const productLink = ref('https://www.camt.cmu.ac.th');
        const onSale = ref(true);
        const inventory = ref(100)
        const reviews = ref([])
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, sizes:'S'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, sizes:'M'},
        ])
        const selectedVariant = ref(0)
        const cart = ref(0)
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const currentSizes = computed(() => {
            return variants.value[selectedVariant.value].sizes; // 获取当前选中变体的尺寸
        });
        function addToCart() {
            emit('add-to-cart', variants.value[selectedVariant.value].id)
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage) {
            image.value = variantImage;
        }
        function toggleStockStatus() {
            const currentVariant = variants.value[selectedVariant.value];
            if (currentVariant.quantity > 0) {
                onSale.value = true; // 如果有库存，则设为无库存
            } else {
                onSale.value = false; // 如果无库存，则设为50
            }
        }
        function addReview(review){
            reviews.value.push(review)
        }
        return {
            title,
            image,
            productLink,
            onSale,
            inStock,
            currentSizes,
            inventory,
            reviews,
            details,
            variants,
            addToCart,
            updateImage,
            updateVariant,
            addReview,
            toggleStockStatus,
            shipping
        }
    }
}