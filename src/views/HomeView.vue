<template>
  <div v-for="(user, index) in users" :key="user.id">
    <div :class="animation === index ? 'delete_animation' : ''" class="users">
      <div class="users_info">
        {{ "№" + user.id + " " + user.nickname }}
      </div>
      <div
        class="users_delete"
        @click="deleteUser(index)"
        :class="animation !== index && animation !== -1 ? 'disable' : ''"
      >
        <img src="../assets/icons/trash.svg" alt="trash" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { ref } from "vue";

export default {
  setup() {
    const users = store.state.users;
    const animation = ref(-1);
    const deleteUser = (index: number) => {
      try {
        animation.value = index;
        setTimeout(() => {
          users.splice(index, 1);
          animation.value = -1;
        }, 1000);
      } catch {
        throw new Error("Что то пошло не так");
      }
    };

    return {
      users,
      animation,

      deleteUser,
    };
  },
};
</script>

<style lang="scss">
.users {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(127, 70, 251);
  padding: 1.2rem;
  margin-bottom: 8px;
  transform: translate(0, 0);
  border-radius: 8px;
  &_info {
    text-align: center;
    margin-right: 16px;
  }
  &_delete {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
.delete_animation {
  transition: 0.5s;
  transform: translateX(1100%);
}
.disable {
  cursor: not-allowed;
  pointer-events: none;
}
</style>
