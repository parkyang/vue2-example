<template>
  <!-- 默认布局 -->
  <div class="page-layout-default">
    <page-header></page-header>
    <slot></slot>
    <page-footer></page-footer>
  </div>
</template>
<script>
import PageHeader from '@/components/modules/Header.vue'
import PageFooter from '@/components/modules/Footer.vue'

export default {
  components: { PageHeader, PageFooter },
}
</script>
