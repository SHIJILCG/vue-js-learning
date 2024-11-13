<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details....</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      requrired: true,
    },
  },
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:5000/jobs/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>
