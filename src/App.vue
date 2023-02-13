<template>
  <div class="flex items-center justify-center h-full mt-10">
    <button
      class="py-2 px-4 bg-pink-600 rounded-full text-white hover:bg-pink-700"
      @click.prevent="toggleModal"
    >
      Show Modal
    </button>

    <Modal @close="toggleModal" :modalActive="modalActive">
      <template #content>
        <form class="bg-white rounded px-8 pt-6 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type Your Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import Modal from "./components/Modal.vue";
import { ref } from "vue";

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="css" scoped></style>
