import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 0,
          nickname: "Alex",
        },
        {
          id: 1,
          nickname: "Ivan",
        },
        {
          id: 2,
          nickname: "Dariya",
        },
      ],
    };
  },
});

export default store;
