import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    username: "",
    password: "",
    lesson1: 116,
    lesson2: 122,
    lesson3: 98,
    otherUsers: [
      {
        username: "user2",
        lesson1: 90,
        lesson2: 131,
        lesson3: 110,
      },
      {
        username: "user3",
        lesson1: 89,
        lesson2: 92,
        lesson3: 145,
      },
      {
        username: "user4",
        lesson1: 128,
        lesson2: 114,
        lesson3: 99,
      },
    ],
  }),
});
