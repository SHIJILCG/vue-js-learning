<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form action="" v-if="!submitted">
      <label for="">Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label for="">Blog Content:</label>
      <textarea name="" id="" v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label for="">Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label for="">Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories" />
        <label for="">Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <label for="">Author:</label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" :key="index">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for addding a post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:{{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="(categorie, index) in blog.categories" :key="index">
          {{ categorie }}
        </li>
      </ul>
      <p>Author:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["shijil", "divin", "akhile", "rishi"],
      submitted: false,
    };
  },
  methods: {
    post: async function () {
      try {
        const collectionRef = collection(db, "posts");
        await addDoc(collectionRef, {
          title: this.blog.title,
          content: this.blog.content,
        });
        this.blog = {
          title: "",
          content: "",
          categories: [],
          author: "",
        };
        this.submitted = true;
        console.log("Post added successfully!");
      } catch {
        console.log("Error adding post");
      }
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}

</style>