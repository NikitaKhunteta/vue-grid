<template>
  <div >
    <div v-if="loading">
      Loading...
    </div>

    <div v-if="error" >
      {{ error }}
    </div>
    <Grid 
    :metaData="{headers: [{ title: 'Name', columnIndex: 'name'}]}">
      
    </Grid>
   
        <button class="btn btn-primary" @click="increment()">Next Page</button>
        <button class="btn btn-primary" @click="decrement()">Prev Page</button>
        <span>Total User count: {{userCount}}</span>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';
    import * as types from '../../vuex/types';
    import Grid from '../../../../components/Grid';

    export default {
      components: {
        Grid
      },
       created () {
        // fetch the data when the view is created 
        this.fetchData()
        },
        methods: {
            ...mapActions({
                fetchData: types.Actions.FETCH_DATA,
            }),
            increment(){
                
            },
            decrement(){

            }
        },
        computed: {
            ...mapState(['loading', 'error']),
            ...mapGetters({
                userCount: types.USER_COUNT,
                users: types.USER_DATA
            })
        }
    }
</script>