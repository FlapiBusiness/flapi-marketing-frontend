<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
    <h1 class="mb-6 text-4xl font-bold text-purple-600">Créer un compte</h1>
    <form class="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <div class="mb-4">
        <label for="fullname" class="mb-2 block text-sm font-semibold text-gray-700">Username</label>
        <input
          type="text"
          id="name"
          placeholder="Entrez votre Pseudonyme"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Entrez votre email"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <!-- Mot de passe -->
      <div class="mb-6">
        <label for="password" class="mb-2 block text-sm font-semibold text-gray-700">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <!-- Bouton d'inscription -->
      <button
        type="submit"
        class="w-full rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
      >
        S'inscrire
      </button>
    </form>

    <!-- Lien vers la page de connexion -->
    <p class="mt-4 text-sm text-gray-500">
      Déjà un compte ? <nuxt-link to="/login" class="text-purple-600 hover:underline">Se connecter</nuxt-link>
    </p>
  </div>
</template>

<script setup>
// Ici, tu peux ajouter de la logique pour le formulaire (gestion des inputs, validation, etc.)
</script>

<style scoped>
/* Tu peux ajouter des styles supplémentaires ici si nécessaire */
</style>
