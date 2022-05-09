<template>
  <div class="learning-analytics">
    <Nav v-model="activeIndex"></Nav>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="user" label="User" width="180">
        </el-table-column>
        <el-table-column prop="lesson1" label="Lesson1" width="180">
        </el-table-column>
        <el-table-column prop="lesson2" label="Lesson2"> </el-table-column>
        <el-table-column prop="lesson3" label="Lesson3"> </el-table-column>
        <el-table-column prop="sum" label="Sum"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 1,
    tableData: [],
  }),
};
</script>

<style lang="less" scoped>
.learning-analytics {
  background: rgba(13, 37, 71, 1);
  .table {
    margin-top: 50px;
    padding: 0 100px;
    & /deep/ .el-table {
      background-color: #394A70;
      border-radius: 10px;
      &::before {
        display: none;
      }
      .el-table__header-wrapper {
        tr,
        th {
          background-color: #64739C;
          border: 0;
          color: #BFCEFB;
        }
      }
    }
  }
}
</style>
