const productDetails = {
    template: `
    <div class="product-details">
        <h3>Product Details lab 9.10</h3>
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