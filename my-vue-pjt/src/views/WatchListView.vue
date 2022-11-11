<template>
  <div>
    <WatchListForm/>
    <WatchListItem/>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'
export default {
  name:'WatchListView',
  components: {
    WatchListForm,
    WatchListItem
  }
}
</script>

<style>

</style>