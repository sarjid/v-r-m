<template>
  <div v-show="modalActive">
    <transition name="fade">
      <div class="fixed z-10 overflow-y-auto top-0 w-full left-0">
        <div
          class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div class="fixed inset-0 transition-opacity" @click="closeModal">
            <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
            >&#8203;</span
          >
          <div
            class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <slot name="content"></slot>
            <div class="px-4 py-3 text-right">
              <button
                type="button"
                class="py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mr-2"
                @click="closeModal"
              >
                Cancel <fa icon="close" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  modalActive: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-inner-leave-to {
  transform: scale(0.8);
}
</style>
