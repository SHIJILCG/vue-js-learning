<template>
  <div>
    <form-Helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label for="">Your Message:</label>
        <textarea name="" id=""></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handelSubmit">Send</button>
      </div>
    </form-Helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default{
     components:{
         'form-Helper': formHelper
     },
     data(){
         return{}
     },
     methods:{
         handelSubmit:function () {
              alert('thanks for submitting form one & contacting us')
         }
     }
}
</script>



<style>
 body{
     margin: 0;
     font-family: 'Nunito SemiBold';
 }
</style>
