<script lang="ts">
import { OrderTerm } from "../types/OrderTerm";
import { JobType } from "../types/Job";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<JobType[]>,
    },
    order: {
      require: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: JobType, b: JobType) => {
        return a[props.order || "title"] > b[props.order || "title"] ? 1 : -1;
      });
    });

    return { orderedJobs };
  },
});
</script>

<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <img src="../assets/rupee.svg" alt="rupee icon" />
          <p>{{ job.salary }} rupees</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatum maiores officia voluptatibus amet, quam quae excepturi quo
          enim? Nemo recusandae mollitia ducimus nobis iure nulla repudiandae
          iusto asperiores perferendis?
        </p>
      </li>
    </transition-group> </div>
</template>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move{
    transition: all 1s;
}
</style>
