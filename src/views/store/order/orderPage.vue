<!-- ListPage.vue -->
<template>
  <div class="order-page">
    <div>
      <h1>订单列表</h1>
      <el-table :data="items" style="width: 100%" stripe>
        <el-table-column prop="order_no" label="订单号"></el-table-column>
        <el-table-column prop="user_id" label="用户ID"></el-table-column>
        <el-table-column prop="commodity_code" label="商品代码"></el-table-column>
        <el-table-column prop="count" label="数量"></el-table-column>
        <el-table-column prop="amount" label="金额"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-button @click="purchase" round="true">下单</el-button>
    </div>
  </div>
</template>

<script>
import {order, orderList} from "@/api/api";
import {ElMessage} from "element-plus";

export default {
  name: "orderPage",
  data() {
    return {
      items: [
        {id: 1, order_no: "ORD001", user_id: 101, commodity_code: "COM001", count: 2, amount: 50.0},
        {id: 2, order_no: "ORD002", user_id: 102, commodity_code: "COM002", count: 1, amount: 30.0},
        // 添加更多数据项
      ],
      orderInfo: {
        "userId": 1,
        "commodityCode": "T00001",
        "count": 2,
        "amount": 200.00
      }
    };
  },
  mounted() {
    // 模拟从数据源获取数据，可以使用axios或其他方式从API获取数据
    orderList().then(response => {
      this.data = response.data;
    }).catch(error => {
      console.error('获取数据失败', error);
    });
  },
  methods: {
    handleItemClick(item) {
      console.log(`Clicked on ${item.name}`);
      // 在这里可以进行路由导航或其他逻辑操作
    },
    purchase() {
      console.log(this.orderInfo)
      order(this.orderInfo).then(res => {
        ElMessage.success(res.status + '发送成功');
      })
    }
  },
};
</script>

<style scoped>
.order-page {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
