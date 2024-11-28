<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
    <h1 class="mb-6 text-4xl font-bold text-purple-600">Page de Connexion</h1>

    <form class="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <div class="mb-4">
        <label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Entrez votre email"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div class="mb-6">
        <label for="password" class="mb-2 block text-sm font-semibold text-gray-700">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
      >
        Se connecter
      </button>
    </form>

    <p class="mt-4 text-sm text-gray-500">
      Pas encore inscrit ? <nuxt-link to="/register" class="text-purple-600 hover:underline">Créer un compte</nuxt-link>
    </p>
  </div>
</template>

<script setup>
// Vous pouvez ajouter des logiques pour le formulaire ici
</script>

<style scoped>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>
