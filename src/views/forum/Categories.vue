<template>
  <div class="categories">
    <div class="banner">
      <img :src="require('@/assets/images/banner.png')" alt="">
      <div class="mask">
        <h3>Forum</h3>
        <p>Thank for joining the forum of iSecurity Platform! Here you can create engaging conversations with your fellow learners and sharing knowledge with others.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.categories {
  .banner {
    display: flex;
    justify-content: center;
    img {
      position: absolute;
      height: 342px;
      width: 1100px;
    }
    .mask {
      height: 342px;
      width: 1100px;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        color: #fff;
        font-size: 25px;
      }
      p {
        margin-top: 20px;
        color: #fff;
        width: 60%;
        font-size: 17px;
      }
    }
  }
}
</style>