import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    username: "",
    password: "",
    lesson1: 0,
    lesson2: 0,
    lesson3: 0,
    otherUsers: [
      {
        username: "user2",
        lesson1: 6,
        lesson2: 5,
        lesson3: 3,
      },
      {
        username: "user3",
        lesson1: 7,
        lesson2: 2,
        lesson3: 4,
      },
      {
        username: "user4",
        lesson1: 5,
        lesson2: 9,
        lesson3: 3,
      },
    ],
  }),
});
