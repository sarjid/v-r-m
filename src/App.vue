<template>
  <div class="flex items-center justify-center h-full mt-10">
    <button
      class="py-2 px-4 bg-pink-600 rounded-full text-white hover:bg-pink-700"
      @click.prevent="toggleModal"
    >
      Show Modal
    </button>

    <Modal @close="toggleModal" :modalActive="modalActive"></Modal>
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
