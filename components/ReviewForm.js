const { reactive,toRefs, defineComponent } = Vue;

const reviewForm = {
    template:
        /*html*/
     `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>    
      <textarea id="review" v-model="review"></textarea>

      <label for="question">Would you recommend this product?</label>    
      <textarea id="question" v-model="question"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>`,
    setup(props,{emit}) {
        const form = reactive({
            name: '',
            review: '',
            question: '',
            rating: null
        })
        function onSubmit(){
            if (form.name === '' || form.review === '' || form.question === '' || form.rating === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            const productReview = {
                name: form.name,
                review: form.review,
                question:form.question,
                rating: form.rating
            }
            emit('review-submitted', productReview)
            form.name = ''
            form.review = ''
            form.question = ''
            form.rating = null
        }
        return {
            ...toRefs(form),
            onSubmit
        }
    }

}