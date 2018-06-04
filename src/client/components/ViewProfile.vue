<template>
    <div class="view_container">
        <p>Profile View</p>

        <div>
            <img :src="picture" class="profile_picture" @error="imageLoadOnError">
        </div>
        <div>
            <p class="name">{{ name }}</p>
        </div>
         <div>
            <p class="account_number">{{ accnumber }}</p>
        </div>
    </div>
</template>

<script>

    import { eventBus } from '../../main';

    export default {
        name: 'ViewProfile',
        data: function(){
            return {
                picture: "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-512.png",
                name: "Full Name",
                accnumber: "Sample Account Number"
            }
        },
        methods: {
            imageLoadOnError(){
                this.picture = "https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-512.png"
            }
        },
        created(){
            eventBus.$on('profilePictureEdited', (url)=> {
                this.picture = url;
            });

            eventBus.$on('nameEdited', (name)=> {
                this.name = (name === "" ? "Full Name" : name) ;
            });

            eventBus.$on('numberEdited', (accnumber)=> {
                this.accnumber = (accnumber === "" ? "Sample Account Number" : accnumber);
            });
        }
    }
</script>
<style>
    .view_container{
        margin-top: 20px;
        margin-left: 5%;    
        width: 40%;
        display: inline-block;
    }

    .profile_picture{
        height: 100px;
        border-radius: 50%;
        margin: 20px;
    }

    .name{
        font-size: 18px;
        text-decoration: underline;
    }
    
    .account_number{
        text-decoration: italic;
    }
</style>