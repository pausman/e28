import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { ShowDogsPage } from '@/components/pages/ShowDogsPage.vue'

describe('ShowDogsPage.vue', () => {
  it('shows a vote', () => {
    // Define a product we can test
    let dogs = [
      {
        "weight": "44 - 66",
        "height": "30",
        "id": 1,
        "name": "African Hunting Dog",
        "bred_for": "A wild pack animal",
        "life_span": "11 years",
        "temperament": "Wild, Hardworking, Dutiful",
        "origin": "",
        "url": "https://cdn2.thedogapi.com/images/rkiByec47_1280.jpg"
      },
      {
        "weight": "20 - 40",
        "height": "15 - 19",
        "id": 2,
        "name": "American Eskimo Dog",
        "country_code": "US",
        "bred_for": "Circus performer",
        "breed_group": "Non-Sporting",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "url": "https://cdn2.thedogapi.com/images/Bymjyec4m_1280.jpg"
      }]
    const wrapper = shallowMount(ShowDogsPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    let foundDogsLink = wrapper.find('data-test=["show-dog-test"]').exists();
    expect(foundDogLink).to.equal(true);
  })
})
