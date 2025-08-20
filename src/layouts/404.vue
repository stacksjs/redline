<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
useHead({
  title: () => t('not-found'),
})
</script>

<template>
  <main class="bg-primary min-h-screen flex items-center justify-center px-4">
    <div class="mx-auto max-w-4xl text-center">
      <!-- Background Design Element -->
      <div class="relative">
        <!-- 404 Content -->
        <RouterView />

        <!-- Navigation Buttons -->
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            class="btn-primary hover:bg-red-800"
            @click="router.back()"
          >
            ← {{ t('button.back') }}
          </button>
          <RouterLink
            to="/"
            class="border border-redline-red rounded-md px-6 py-3 text-redline-red font-medium transition-colors hover:bg-redline-red hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-redline-red"
          >
            Back to Home
          </RouterLink>
        </div>

        <!-- Help Section -->
        <div class="border-default mt-12 border-t pt-8">
          <p class="text-muted-foreground mb-4 text-sm">
            Need help finding what you're looking for?
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <RouterLink to="/who-we-help" class="text-primary transition-colors hover:text-redline-red">
              Who We Help
            </RouterLink>
            <RouterLink to="/services" class="text-primary transition-colors hover:text-redline-red">
              Our Services
            </RouterLink>
            <RouterLink to="/case-studies" class="text-primary transition-colors hover:text-redline-red">
              Case Studies
            </RouterLink>
            <RouterLink to="/about" class="text-primary transition-colors hover:text-redline-red">
              About Us
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
