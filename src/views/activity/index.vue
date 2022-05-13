<template>
  <div class="activity">
    <Nav v-model="activeIndex"></Nav>
    <div class="select" v-if="activeGame === null">
      <el-select v-model="activeGame" placeholder="choose your lesson">
        <el-option
          v-for="item in gameList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="game" v-else>
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
import { game2Info, calcGame2Score } from "./game2";
import { game3Info, calcGame3Score } from "./game3";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 2,
    userStore: userStore(),
    activeGame: null,
    gameList: [
      {
        id: 1,
        name: "Lesson 1: Be cautious when working in the office",
      },
      {
        id: 2,
        name: "Lesson 2: Using Public Wi-Fi Securely",
      },
      {
        id: 3,
        name: "Lesson 3: Avoiding Password Peril",
      },
    ],
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
      game2Q1: "",
      game2Q2: "",
      game2Q3: "",
      game2Q4: "",
      game2Q5: "",
      game2Q6: "",
      game2Q7: "",
      game2Q8: "",
      game2Q9: "",
      game2Score: "",
      game3Q1: "",
      game3Q2: "",
      game3Q3: "",
      game3Q4: "",
      game3Score: "",
    },
    activeGameContentIndex: 0,
  }),
  computed: {
    calcGameScore() {
      switch (this.activeGame) {
        case 1:
          return calcGame1Score;
        case 2:
          return calcGame2Score;
        case 3:
          return calcGame3Score;
        default:
          break;
      }
    },
    game() {
      switch (this.activeGame) {
        case 1:
          return game1Info;
        case 2:
          return game2Info;
        case 3:
          return game3Info;
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
      this.form[`game${this.activeGame}Score`] = count;
      this.userStore[`lesson${this.activeGame}`] = count;
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
  .select {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    & /deep/ input {
      box-sizing: border-box;
      resize: none;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      width: 500px;
      height: 60px;
      border-radius: 5px;
      border: 0;
      background-color: #64739c;
      color: #bfcefb;
      outline: none;
      padding: 10px 20px;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
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
