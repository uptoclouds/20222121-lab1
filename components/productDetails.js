const productDetails = {
    template: `
    <div class="product-details">
        <h3>Product Details</h3>
        <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
        </ul>
    </div>
    `,
    props: {
        details: {
            type: Array,
            required: true
        }
    }
}