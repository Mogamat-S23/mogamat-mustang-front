<template>
    <div class="container">
    <h2 style="color: black;">User Table</h2>
    <table class="table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>email</th>
         
          
          <th>edit/delete</th>

         
          
         
          
         
          
        </tr>
      </thead>
      <tbody v-if="users">
            <tr v-for="user in users" :key="user.id">
              <td>{{user.user_id  }}</td>
              <td>{{user.firstName }}</td>
            <td>{{user.surName}}</td>
            <td>{{user.email}}</td>
           
            <td><button data-bs-toggle="modal" :data-bs-target="'#updateuser'+user.user_id">
                edit

            </button>
            <button @click="this.$store.dispatch('deleteUser', user.user_id)">delete</button>
            </td>
            
    
           
            
 <editUser :user="user"/>
          </tr> 
      </tbody>
        <div v-else>No users</div>
    </table>
  </div>
</template>

<script>
import editUser from "@/components/editUser.vue"

export default {
components:{editUser},

  mounted(){
    this.$store.dispatch("fetchUsers")
  },    

  computed: {
    users() {
        return this.$store.state.users;
    },
  },
}
</script>

<style scoped>


     header{
    background-color: black;
    height: 10vh;
    overflow-x:hidden;
  
  }

.table{
  margin-top: 50px;
}
    
</style>