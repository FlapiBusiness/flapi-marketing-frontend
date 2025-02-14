import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Register from '@/pages/register.vue'
import type { Router } from 'vue-router'
import { createRouter, createMemoryHistory } from 'vue-router'

// Créer un mock de router avec annotation de type
const router: Router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/register', component: Register }],
})

describe('Register.vue', () => {
  it('affiche le titre correctement', () => {
    const wrapper: VueWrapper = mount(Register, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.text()).toContain('Créer un compte')
  })

  it('affiche le champ Username', () => {
    const wrapper: VueWrapper = mount(Register, {
      global: {
        plugins: [router],
      },
    })
    const usernameInput: DOMWrapper<HTMLInputElement> = wrapper.find('input#name')
    expect(usernameInput.exists()).toBe(true)
  })

  it('affiche le champ Email', () => {
    const wrapper: VueWrapper = mount(Register, {
      global: {
        plugins: [router],
      },
    })
    const emailInput: DOMWrapper<HTMLInputElement> = wrapper.find('input#email')
    expect(emailInput.exists()).toBe(true)
  })

  it('affiche le champ Mot de passe', () => {
    const wrapper: VueWrapper = mount(Register, {
      global: {
        plugins: [router],
      },
    })
    const passwordInput: DOMWrapper<HTMLInputElement> = wrapper.find('input#password')
    expect(passwordInput.exists()).toBe(true)
  })
})
