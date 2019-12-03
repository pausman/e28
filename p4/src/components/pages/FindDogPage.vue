
<template>
  <div>
    <form>
      <p>
        <label for='bred_for'>Bred For:</label>
        <select id='bred_for'>
          <option value selected disabled>Choose</option>
          <option v-for='(bf, id) in bredfor' :key='id' :value='bf'>{{bf}}</option>
        </select>
      </p>
      <p>
        <label for='breed_group'>Breed Group:</label>
        <select id='breed_group'>
          <option value selected disabled>Choose</option>
          <option v-for='(bg, id) in breedgroup' :key='id' :value='bg'>{{bg}}</option>
        </select>
      </p>
      <p>
        <label for='temper_group'>Temperment:</label>
        <select id='temper_group'>
          <option value selected disabled>Choose</option>
          <option v-for='(tg, id) in tempergroup' :key='id' :value='tg'>{{tg}}</option>
        </select>
      </p>
    </form>
  </div>
</template>


<script>
export default {
  name: 'FindDogPage',

  data: function() {
    return {};
  },
  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    },
    bredfor: function() {
      let bredfors = this.dogs.map(bf => bf.bred_for);

      let mergedbredfors = [].concat.apply([], bredfors);
      return [...new Set(mergedbredfors)].sort();
    },
    breedgroup: function() {
      let breedgroups = this.dogs.map(bg => bg.breed_group);

      let mergedbreedgroups = [].concat.apply([], breedgroups);
      return [...new Set(mergedbreedgroups)].sort();
    },
    tempergroup: function() {
      let tempergroups = this.dogs.map(tg => tg.temperament.split(','));

      let mergedtempergroups = [].concat.apply([], tempergroups);
      return [...new Set(mergedtempergroups)].sort();
    }
  }
};
</script>