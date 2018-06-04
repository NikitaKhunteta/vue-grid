<template>
    <div class="edit_container">
        <p>Edit Profile:</p>
        <div>
            <input placeholder="Profile Picture" @input="pcitureChange"> 
        </div>
        <div>
            <input placeholder="Name" @input="nameChange">
        </div>
        <div>
            <input placeholder="Account Number" @input="numberChange">
        </div>

    </div>
</template>

<script>

    import { eventBus } from '../../main';
    //import { utilMixin } from '../mixins/custom.js';

    
    export default {
        name: 'EditProfile',
        data: function(){
            return {
                profilepicture: "",
                fullname: "",
                accountnumber: "",
            };
        },
        methods: {
            pcitureChange(e){
                this.profilepicture = e.target.value;
                eventBus.$emit("profilePictureEdited", this.profilepicture);
            },

            nameChange(e){
                this.fullname = e.target.value;
                eventBus.$emit("nameEdited", this.fullname);
            },

            numberChange(e){
                this.accountnumber = e.target.value;
                eventBus.$emit("numberEdited", this.accountnumber);
            }

        },
        //mixins: [utilMixin]
    }
</script>
<style>
    .edit_container{
        margin-top: 20px;
        width: 50%;
        display: inline-block;
    }

    input{
        width: 50%;
        padding: 5px;
        border-radius: 2px;
        border: 1px solid #dddddd;
        margin: 5px;
    }
</style>