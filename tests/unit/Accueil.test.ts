import { describe, it, expect } from 'vitest'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Accueil from '@/pages/index.vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

describe('Accueil.vue', () => {
  // Définition explicite du type Router
  const router: Router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/login', component: {} }],
  })

  it('affiche le titre correctement', () => {
    const wrapper: VueWrapper = mount(Accueil, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('h1').text()).toBe("Bienvenue sur l'application Flapi CMS")
  })

  it("affiche le texte de la page d'accueil", () => {
    const wrapper: VueWrapper = mount(Accueil)
    expect(wrapper.find('p').text()).toBe("Ceci est la page d'accueil")
  })

  it('contient un lien vers la page de connexion', async () => {
    await router.isReady()

    const wrapper: VueWrapper = mount(Accueil, {
      global: {
        plugins: [router],
      },
    })

    const link: DOMWrapper<HTMLAnchorElement> = wrapper.find('a') // Ajout du type ici
    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('Aller à la page de connexion')
    expect(link.attributes('href')).toBe('/login')
  })
})
