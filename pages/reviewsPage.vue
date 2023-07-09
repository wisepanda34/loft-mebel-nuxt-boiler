<template>
  <section class="reviews">
    <div class="reviews__controlForm">
      <h5
        class="reviews__hideForm"
        @click="toggleForm"
      >
        {{ isStateForm }}
      </h5>
    </div>

    <div
      v-show="isFormOpen"
      class="reviews__writeComment"
    >
      <form
        class="reviews__form"
        @submit.prevent="handleSubmitComment"
      >
        <input
          v-model="userValue"
          class="reviews__form_input"
          placeholder="username"
          required
        >

        <textarea
          v-model="textValue"
          class="reviews__form_textarea"
          placeholder="comment"
          style="height: 80px"
          required
          minLength="5"
          maxLength="300"
        />
        <div class="reviews__form_buttons">
          <my-button
            class="reviews__form_submit"
            type="submit"
          >
            Submit
          </my-button>
          <my-button
            class="reviews__form_cancel"
            type="button"
            @click="cancelComment"
          >
            Cancel
          </my-button>
        </div>
      </form>
    </div>

    <div class="reviews__wrapper">
      <h3 class="reviews__title center">OUR CLIENTS COMMENTS</h3>

      <div v-if="!isPostsLoading">
        <div
          v-for="comment in getComments"
          :key="comment.id"
          class="reviews__comments"
        >
          <div class="reviews__user"><span>client:</span> {{ comment.user.username }}</div>
          <div class="reviews__text"><span>review:</span> {{ comment.body }}</div>
        </div>
      </div>

      <div
        v-else
        class="center"
      >
        Loading...
      </div>
      <div
        class="reviews__more center"
        @click="loadMoreComments"
      >
        <span>Show more comments</span>
      </div>
    </div>
  </section>
</template>

<script>
  import MyButton from '@/components/UI/MyButton.vue'
  import { useComments } from '~/stores/userComment'

  export default {
    name: 'ReviewsPage',
    components: { MyButton },
    data () {
      return {
        counter: 0,
        isPostsLoading: false,
        page: 1,
        limit: 10,
        userValue: '',
        textValue: '',
        isFormOpen: true,
        isStateForm: 'hide form'
      }
    },
    setup () {
      const commentsStore = useComments()
      const getComments = computed(() => commentsStore.getComments)
      return { commentsStore, getComments }
    },
    methods: {
      async fetchGetComments () {
        try {
          this.isPostsLoading = true
          const res = await fetch(`https://dummyjson.com/comments?limit=${this.limit}&skip=${(this.page - 1) * this.limit}&select=body,postId`, {
          })

          const newComments = await res.json()
          await this.addCommentsToApiComments(newComments.comments)
        } catch (error) {
          console.log(error)
          console.error('reviewsPage error', error)
        } finally {
          this.isPostsLoading = false
        }
      },
      loadMoreComments () {
        this.page++
        this.fetchGetComments()
      },
      toggleForm () {
        if (this.isFormOpen === true) {
          this.isFormOpen = false
          this.isStateForm = 'open form'
          this.cancelComment()
        } else {
          this.isFormOpen = true
          this.isStateForm = 'close form'
        }
      },
      cancelComment () {
        this.userValue = ''
        this.textValue = ''
      },
      addCommentToUserComments (newComment) {
        this.commentsStore.addUserComment(newComment)
      },
      addCommentsToApiComments (newComments) {
        this.commentsStore.addApiComments(newComments)
      },
      handleSubmitComment () {
        const newId = 'my-' + this.counter++

        const newComment = {
          id: Date.now(),
          body: '',
          postId: newId,
          user: {
            id: newId,
            username: ''
          }
        }
        newComment.user.username = this.userValue
        newComment.body = this.textValue
        this.addCommentToUserComments(newComment)
        this.userValue = ''
        this.textValue = ''
      }
    },
    mounted () {
      this.fetchGetComments()
    }
  }
</script>

<style lang="scss" scoped>
.reviews{
  &__controlForm{
    width: 90%;
    margin: 0 auto;
  }
  &__hideForm{
    color: #366a7a;
    cursor: pointer;
    text-decoration: underline;
    padding: 20px 0;
    &:hover{
      color: #4199b4;
    }
  }
  &__writeComment{
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border: solid 1px #366a7a;
    background: #e0eaec;
    cursor: pointer;
    text-align: start;

  }
  &__form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    &_input,&_textarea{
      outline: none;
      height: 40px;
      padding: 10px;
      text-decoration: none;
      resize: none;
      background: #FFF;
      &::-webkit-input-placeholder{
        text-decoration: none;
        //text-overflow: clip;
      }
    }
    &_buttons{
      display: flex;
      gap: 20px;
    }
    &_submit{
      width: 100px;
    }
    &_cancel{
      width: 100px;
    }
  }
  &__wrapper{
    padding: 30px 0;
  }

  &__title{
    color: #4c6062;
    margin-bottom: 30px;
    justify-self: start;
  }
  &__comments{
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border: solid 1px #366a7a;
    background: #e0eaec;
    span{
      color: #366a7a;
      font-weight: 700;
    }
  }
  &__more{
    padding: 10px 0;
    font-size: 16px;
    color: #366a7a;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
      color: #4199b4;
    }
  }
}
@media (max-width: 767px) {
  .reviews{
    &__comments{
      font-size: 12px;
    }
    &__title{
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}
</style>
