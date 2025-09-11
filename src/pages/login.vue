<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'LoginPage',
})

useHead({
  title: 'Client Login - Redline Marketing Agency',
  meta: [
    {
      name: 'description',
      content: 'Client portal access for Redline Marketing Agency clients. Manage your campaigns and track performance.',
    },
  ],
})

const form = ref({
  email: '',
  password: '',
})

const isLoading = ref(false)
const showError = ref(false)

function handleSubmit() {
  // Prevent form submission and show error
  isLoading.value = true
  showError.value = false

  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false
    showError.value = true

    // Log error for developer visibility
    console.error('Authentication service unavailable: Unable to connect to login server.')

    // Clear the form to make it look like it "tried"
    form.value.email = ''
    form.value.password = ''
  }, 2000) // 2 second delay to seem realistic
}
</script>

<template>
  <div class="bg-primary min-h-screen flex items-center justify-center px-4">
    <div class="mx-auto max-w-md w-full">
      <!-- Header -->
      <div class="mb-8 text-center">
        <RouterLink to="/" class="mb-6 inline-block">
          <img src="/logo.png" alt="Redline Marketing Logo" class="mx-auto h-20">
        </RouterLink>
        <h1 class="text-primary mb-2 text-3xl font-bold font-racing">
          Client Login
        </h1>
        <p class="text-muted-foreground">
          Access your campaign dashboard and performance reports
        </p>
      </div>

      <!-- Login Form -->
      <div class="border-default bg-surface border rounded-lg p-8 shadow-lg">
        <!-- Error Message -->
        <div v-if="showError" class="mb-6 border border-red-200 rounded-md bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div class="flex justify-between">
            <div class="flex-1">
              <h3 class="text-sm text-red-800 font-bold dark:text-red-200">
                Login Temporarily Unavailable
              </h3>
              <div class="mt-3 text-left text-sm text-red-700 dark:text-red-300">
                <p>
                  We're currently updating our client portal system. For immediate access to your campaign data and reports,
                  please reach out to our team directly. We'll provide you with the latest performance updates and answer any questions you may have.
                </p>
              </div>
              <div class="mt-3 text-center">
                <a href="mailto:hello@redlinemarketingagency.com" class="text-sm text-red-800 font-medium dark:text-red-200 hover:text-red-900 dark:hover:text-red-100">
                  Contact Support →
                </a>
              </div>
            </div>
            <div class="ml-4 flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <form class="text-left space-y-6" @submit.prevent="handleSubmit">
          <!-- Email Field -->
          <div>
            <label for="email" class="text-primary mb-2 block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="border-default text-primary placeholder:text-muted w-full border rounded-md bg-white px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
              placeholder="your@email.com"
              :disabled="isLoading"
            >
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="text-primary mb-2 block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="border-default text-primary placeholder:text-muted w-full border rounded-md bg-white px-3 py-2 transition-colors focus:border-redline-red focus:outline-none focus:ring-2 focus:ring-redline-red"
              placeholder="••••••••"
              :disabled="isLoading"
            >
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                type="checkbox"
                class="mr-2 h-4 w-4 border-gray-300 rounded text-redline-red focus:ring-redline-red"
                :disabled="isLoading"
              >
              <span class="text-muted-foreground text-sm">Remember me</span>
            </label>
            <a href="#" class="hover:text-redline-red-darker text-sm text-redline-red transition-colors">
              Forgot password?
            </a>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span v-if="isLoading" class="flex items-center justify-center">
              <svg class="mr-3 h-5 w-5 animate-spin text-white -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="border-default my-6 border-t">
          <div class="relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="bg-surface text-muted-foreground px-3 text-sm">
                Need access?
              </span>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-center">
          <p class="text-muted-foreground mb-4 text-sm">
            Don't have an account yet? Contact us to set up your client portal.
          </p>
          <div class="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:hello@redlinemarketingagency.com"
              class="hover:text-redline-red-darker text-sm text-redline-red transition-colors"
            >
              hello@redlinemarketingagency.com
            </a>
            <a
              href="tel:+1234567890"
              class="hover:text-redline-red-darker text-sm text-redline-red transition-colors"
            >
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="mt-8 text-center">
        <RouterLink
          to="/"
          class="text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Back to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
