import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Login from '@/pages/login.vue'
import type { Router } from 'vue-router'
import { createRouter, createMemoryHistory } from 'vue-router'

// Créer un mock de router avec une annotation de type
const router: Router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: Login }],
})

describe('Login.vue', () => {
  it('affiche le titre correctement', () => {
    // Ajouter l'annotation de type pour wrapper
    const wrapper: VueWrapper = mount(Login, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.text()).toContain('Se connecter') // Titre réel
  })

  it('affiche les champs email et mot de passe', () => {
    const wrapper: VueWrapper = mount(Login, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('input[type="email"]').exists()).toBe(true) // Champ email
    expect(wrapper.find('input[type="password"]').exists()).toBe(true) // Champ mot de passe
  })

  it('affiche le bouton de connexion', () => {
    const wrapper: VueWrapper = mount(Login, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true) // Bouton de soumission
  })

  it("contient un lien vers la page d'inscription", () => {
    const wrapper: VueWrapper = mount(Login, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('a').attributes('href')).toBe('/register') // Lien réel
  })
})
