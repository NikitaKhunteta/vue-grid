<template>
   <table>
    <thead>
      <tr>
       <th v-for="(header) in metaData.headers" :key="header.columnIndex">
         {{header.title}}
       </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in data" :key=value.id>
       
      </tr>
    </tbody>
  </table>
</template>

<script>
function gridCreator(baseState) {
  return function(){

  }
}
export default {
    name: 'Grid',
    props: {
      metaData: {
        headers: []
      }
    }
}
</script>
