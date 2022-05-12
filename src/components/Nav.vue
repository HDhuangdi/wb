<template>
  <div class="nav">
      <div class="header_left" @click="$router.push('/')">iSecurity</div>
      <div class="header_right">
        <div v-for="(item, index) in list" :key="index">
          <el-dropdown>
            <span
              class="el-dropdown-link"
              @click.stop="clickHandler(index, item)"
              style="color: #fff"
              :class="{ active: value == index ? true : false }"
            >
              {{ item.name
              }}<i
                v-if="item.content && item.content.length > 0"
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu
              ref="aaa"
              style="
                padding: 0;
                margin: 0;
                background: rgb(13, 37, 71);
                border: 0;
              "
            >
              <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
  </div>
</template>

<script>
import { userStore } from '@/store'

export default {
  props: ['value'],
  data: () => ({
    userStore: userStore(),
    list: [
      { id: 0, name: "Home" },
      {
        id: 1,
        name: "Lessons",
      },
      {
        id: 2,
        name: "Activity",
      },
      { id: 3, name: "Forum" },
      { id: 4, name: "Contact" }
    ],
  }),
  created() {
    if (!this.userStore.isLogin) {
      this.list.push({ id: 4, name: "Login>>" })
    }
  },
  methods: {
    dropdowns(a, type) {
      this.$refs.aaa[type].appendArrow(false);
    },
    clickHandler(index, item) {
      switch (item.name) {
        case "Home":
          this.$router.push("/");
          break;
        case "Lessons":
          this.$router.push("/learning-analytics");
          break;
        case "Activity":
          this.$router.push("/activity");
          break;
        case "Forum":
          this.$router.push("/forum");
          break;
        case "Contact":
          this.$router.push("/contact");
          break;
        case "Login>>":
          this.$router.push("/login");
          break;
        default:
          break;
      }
      this.$emit('input', index)
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  padding: 22.5px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 40px;
    text-align: center;
  }
  .header_left {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .header_right {
    display: flex;
    > div {
      padding: 15px 20px;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      text-transform: none;
      font-size: 16px;
    }
    > div:hover {
      color: #00cc99;
      cursor: pointer;
    }
  }
}
.active {
  color: #00cc99 !important;
}
</style>
