
<template>
  <div>
    <!-- Form to collect information if you want to volunteer  -->
    <h1>Volunteer!</h1>
    <form @submit.prevent='volunteerToHelp'>
      <label for='Name_text'>Name:</label>
      <input
        type='text'
        name='name'
        :class='{ "form-input": $v.name.$error }'
        data-test='vol-name-input'
        v-model='$v.name.$model'
        placeholder='Name'
      />

      <div v-if='$v.name.$error'>
        <div
          class='form-error'
          data-test='vol-name-err2'
          v-if='!$v.name.required'
        >Your name is required please.</div>
        <div
          class='form-error'
          v-else-if='!$v.name.minLength'
          data-test='vol-name-err'
        >Your name must be at least 5 characters long</div>
      </div>
      <br />
      <small>Required field Min 5 characterws</small>
      <br />
      <label for='Email_text'>Email:</label>
      <input
        type='text'
        name='email'
        :class='{ "form-input": $v.email.$error }'
        data-test='vol-email-input'
        v-model='$v.email.$model'
        placeholder='Email'
      />
      <br />
      <small>Required field</small>

      <div v-if='$v.email.$error'>
        <div
          class='form-error'
          data-test='vol-email-err'
          v-if='!$v.email.required'
        >Email address is required please.</div>
        <div
          class='form-error'
          data-test='vol-email-err2'
          v-else-if='!$v.email.email'
        >Please enter a valid email address.</div>
      </div>
      <br />
      <label for='Name_text'>Phone:</label>
      <input
        type='tel'
        name='phone'
        :class='{ "form-input": $v.phone.$error }'
        data-test='vol-phone-input'
        v-model='$v.phone.$model'
        placeholder='Phone'
      />
      <br />
      <small>Numbers only please in the Format: 123-456-6789</small>

      <div v-if='$v.phone.$error'>
        <div
          class='form-error'
          data-test='vol-phone-err'
          v-if='!$v.phone.required'
        >A phone number is required please.</div>
        <div
          class='form-error'
          data-test='vol-phone-err2'
          v-else-if='!$v.phone.isPhone'
        >Please enter a valid phone number.</div>
      </div>

      <br />
      <p>Available Days for Volunteering:</p>
      <small>Please select at least one day to volunteer</small>
      <fieldset>
        <input
          type='checkbox'
          :class='{ "form-input": $v.monam.$error }'
          data-test='vol-day-checkbox1'
          v-model='$v.monam.$model'
          value='Monday'
        /> Monday
        <br />
        <input
          type='checkbox'
          :class='{ "form-input": $v.monam.$error }'
          data-test='vol-day-checkbox2'
          v-model='$v.monam.$model'
          value='Tuesday'
        /> Tuesday
        <br />
        <input
          type='checkbox'
          :class='{ "form-input": $v.monam.$error }'
          data-test='vol-day-checkbox3'
          v-model='$v.monam.$model'
          value='Wednesday'
        /> Wednesday
        <br />
        <input
          type='checkbox'
          :class='{ "form-input": $v.monam.$error }'
          data-test='vol-day-checkbox4'
          v-model='$v.monam.$model'
          value='Thursday'
        /> Thursday
        <br />
        <input
          type='checkbox'
          :class='{ "form-input": $v.monam.$error }'
          data-test='vol-day-checkbox5'
          v-model='$v.monam.$model'
          value='Friday'
        /> Friday
        <br />
      </fieldset>
      <div v-if='$v.monam.$error'>
        <div
          class='form-error'
          data-test='vol-monam-err'
          v-if='!$v.monam.required'
        >Please select at least one day to volunteer.</div>
      </div>
      <br />
      <button data-test='add-vol-button' type='submit'>Volunteer</button>

      <div
        class='form-error'
        data-test='vol-form-err'
        v-if='formHasErrors'
      >Please correct the above errors</div>
    </form>
  </div>
</template>


<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

const isPhone = value => /^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(value); //phone valid
export default {
  name: 'Volunteer',

  data: function() {
    return {
      name: null,
      email: null,
      phone: null,
      monam: [],
      formHasErrors: true
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      phoneValid: isPhone
    },
    monam: {
      required
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    volunteerToHelp: function() {
      if (!this.formHasErrors) {
        // just storing information in local storage. With real database would save it to server
        // Store a key/value pair
        localStorage.setItem('name', this.name);
        localStorage.setItem('email', this.email);
        localStorage.setItem('phone', this.phone);
        localStorage.setItem('monam', this.monam);

        // after vote show them the show a page for volunteer
        this.$router.push({ path: 'ShowVolunteer' });
      }
    }
  }
};
</script>
<style scoped>
</style>