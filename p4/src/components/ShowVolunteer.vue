<template>
  <div v-if='currentVolunteer'>
    <!-- Show the inputed volunteer informatio0n -->
    <h2>Thank you for volunteering</h2>
    <p>Here is the information you entered</p>
    <p data-test='vol-name'>Name: {{currentVolunteer}}</p>
    <p data-test='vol-email'>Email: {{email}}</p>
    <p data-test='vol-phone'>Phone: {{phone}}</p>
    <p data-test='vol-days'>Volunteer Days:{{days}}</p>
  </div>
  <div v-else>
    <h2>See 'How to Help' on the menu to volunteer</h2>
  </div>
</template>

<script>
export default {
  name: 'VolunteerPage',

  data: function() {
    return {};
  },
  computed: {
    currentVolunteer: function() {
      return localStorage.getItem('name');
    },
    email: function() {
      return localStorage.getItem('email');
    },
    phone: function() {
      return localStorage.getItem('phone');
    },
    days: function() {
      return localStorage.getItem('monam');
    }
  }
};
</script>

<style scoped>
</style>
