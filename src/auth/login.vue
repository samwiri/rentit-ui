<template>
  <v-card flat tile>
    <v-toolbar class="tw-flex justify-center elevation-0">
      <v-toolbar-title centered class="tw-mt-16 tw-mb-8">
        <v-icon size="80" color="primary">mdi-shield-star-outline</v-icon>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <h1 class="tw-my-8 text-center  tw-text-2xl tw-font-bold ">Login form</h1>
      <v-form @submit.prevent="handleLogin(form)">
        <v-text-field
          label="Login"
          v-model="form.fields.email"
          prepend-inner-icon="mdi-account-circle-outline"
          :error-messages="form.errors.email"
          type="text"
          outlined
        />

        <v-text-field
          label="Password"
          class="tw-mt-3"
          prepend-inner-icon="mdi-lock"
          type="password"
          v-model="form.fields.password"
          :error-messages="form.errors.password"
          outlined
        />
        <v-divider />
        <v-btn
          color="primary"
          block
          large
          type="submit"
          :loading="form.loading.value"
          :disabled="form.loading.value"
        >
          <v-icon>
            mdi-lock-open-outline
          </v-icon>
          Login
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { useForm } from "@/services/forms";

export default {
  setup() {
    const form = useForm({ fails: false });

    return { form };
  },
  methods: {
    handleLogin(form) {
      // first we will grab the csrf token
      this.$http.get("/sanctum/csrf-cookie").then(() => {
        form.post("auth/login", {
          onSuccess: ({ data }) => this.handleLoggedIn(data.user),
          onError() {},
        });
      });
    },
    handleLoggedIn(user) {
      this.$auth.setUser(user);
      this.$router.replace("/");
    },
  },
};
</script>
