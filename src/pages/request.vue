<template>
  <button @click="requestRes()"></button>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
import API from '@/api';
import { reactive } from 'vue';

const data = reactive({ data: 'name' });
const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
  data.data = result.data.msg;
};
</script>
