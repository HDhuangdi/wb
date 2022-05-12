<template>
  <div class="activity">
    <Nav v-model="activeIndex"></Nav>
    <div class="game">
      <img class="bg" :src="current.background" alt="" />
      <div
        class="dialog-box"
        :class="{ short: current.character }"
        v-html="getContent(current.content)"
      ></div>
      <i @click="next" class="el-icon-caret-bottom"></i>

      <img
        class="character"
        :style="{
          height: current.characterHeight + 'px',
          width: current.characterWidth + 'px',
        }"
        v-if="current.character"
        :src="current.character"
        alt=""
      />
      <input
        type="text"
        v-model="form[current.key]"
        v-if="current.formItem === 'input'"
      />
      <el-radio-group
        v-model="form[current.key]"
        v-if="current.formItem === 'radio'"
      >
        <el-radio
          :label="item"
          v-for="(item, index) of current.formItemContent"
          :key="index"
          >{{ item }}</el-radio
        >
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import { userStore } from "@/store";
import { game1Info, calcGame1Score } from "./game1";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 2,
    userStore: userStore(),
    activeGame: 1,
    form: {
      name: "",
      game1Q1: "",
      game1Q2: "",
      game1Q3: "",
      game1Q4: "",
      game1Q5: "",
      game1Q6: "",
      game1Q7: "",
      game1Score: "",
    },
    activeGameContentIndex: 0,
  }),
  computed: {
    calcGameScore() {
      switch (this.activeGame) {
        case 1:
          return calcGame1Score;
        default:
          break;
      }
    },
    game() {
      switch (this.activeGame) {
        case 1:
          return game1Info;
        default:
          break;
      }
    },
    current() {
      return this.game[this.activeGameContentIndex];
    },
  },
  created() {
    if (!this.userStore.isLogin) {
      this.$message({
        showClose: true,
        message: "Please login first",
        type: "warning",
      });
      this.$router.replace("/login");
    }
  },
  methods: {
    reset() {
      this.form = {
        name: "",
        game1Q1: "",
        game1Q2: "",
        game1Q3: "",
        game1Q4: "",
        game1Q5: "",
        game1Q6: "",
        game1Q7: "",
        game1Score: "",
      };
      this.activeGameContentIndex = 0;
    },
    next() {
      if (this.game.length - 1 === this.activeGameContentIndex) return;
      this.activeGameContentIndex++;
      const obj = {};
      for (const key in this.form) {
        if (Object.hasOwnProperty.call(this.form, key)) {
          if (key.startsWith("game" + this.activeGame) && ~key.indexOf("Q")) {
            obj[key] = this.form[key];
          }
        }
      }
      const count = this.calcGameScore(obj);
      this.form.game1Score = count;
    },
    getContent(html) {
      const res = html.match(/{{(\w+)}}/);
      if (res) {
        const key = res[1];
        html = html.replace(/{{\w+}}/, this.form[key]);
      }
      return html;
    },
  },
};
</script>

<style lang="less" scoped>
.activity {
  background: rgba(13, 37, 71, 1);
  .game {
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    .bg {
      width: 100%;
      height: calc(100% - 100px);
      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
    .character {
      width: 30%;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      z-index: 2;
      left: 0;
      user-select: none;
    }
    .dialog-box {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100px;
      width: 100%;
      background-color: #394a70;
      color: #bfcefb;
      border-radius: 10px;
      padding: 20px;
      overflow-y: auto;
      letter-spacing: 1px;
      &.short {
        width: 70%;
      }
    }
    & /deep/ .el-radio-group {
      position: absolute;
      bottom: 20px;
      left: 20px;
      .el-radio__label {
        color: #bfcefb;
      }
    }
    input {
      box-sizing: border-box;
      position: absolute;
      bottom: 30px;
      left: 20px;
      background-color: #64739c;
      border: 0;
      height: 30px;
      width: 70%;
      outline: none;
      padding: 0 5px;
      color: #bfcefb;
      border-radius: 5px;
    }
    .el-icon-caret-bottom {
      color: #fff;
      position: absolute;
      bottom: 5px;
      right: 20px;
    }
  }
}
</style>
