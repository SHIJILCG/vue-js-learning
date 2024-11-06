<template>
  <div>
    <form @submit.prevent="handlesubmit">
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <label>Skills</label>
      <input type="text" v-model="tempSkill" @keyup="addskill" />
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="pill"
        @click="removeskill(skill)"
      >
        {{ skill }}
      </div>
      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and conditions</label>
      </div>
      <div class="submit">
        <button type="submit">Create an Account</button>
      </div>
    </form>
    <p>Email:{{ email }}</p>
    <p>Password:{{ password }}</p>
    <p>Role:{{ role }}</p>
    <p>Terms:{{ terms }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addskill(e) {
      if (e.key === "," && this.tempSkill !== "") {
        const value = this.tempSkill.slice(0, this.tempSkill.length - 1);
        console.log(value);
        if (!this.skills.includes(value)) {
          this.skills.push(value);
        }
        this.tempSkill = "";
      }
    },
    removeskill(value) {
      const result = this.skills.filter((item) => item !== value);
      this.skills = result;
    },
    handlesubmit() {
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long";
      if (!this.passwordError) {
        console.log("email", this.email);
        console.log("password", this.password);
        console.log("role", this.role);
        console.log("skills", this.skills);
        console.log("terms", this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  background: white;
  outline: none;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0, 0;
  position: relative;
  top: 1px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
