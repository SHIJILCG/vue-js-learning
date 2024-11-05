<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
  </div>
</template>

<script>
import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  async created() {
    const docRef = doc(db, "posts", this.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      this.blog = docSnap.data();
    } else {
      console.log("no data found");
    }
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
