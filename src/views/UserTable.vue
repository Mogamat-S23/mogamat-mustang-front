<template>
  <div class="back">

    <div class="container">
    <h2 style="color: black;">User Table</h2>
    <table class="table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Surname</th>
          <!-- <th>profileImage</th> -->
          <th>email</th>
         
          
          <th>edit/delete</th>

         
          
         
          
         
          
        </tr>
      </thead>
      <tbody v-if="users">
            <tr v-for="user in users" :key="user.id">
              <td>{{user.user_id  }}</td>
              <td>{{user.firstName }}</td>
              <td>{{user.surName}}</td>
              <!-- <td>{{user.userProfile }}</td> -->
            <td>{{user.email}}</td>
           
            <td><button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateuser'+user.user_id">
                edit

            </button>
            <button class="btn btn-primary" @click="this.$store.dispatch('deleteUser', user.user_id)">delete</button>
            </td>
            
    
           
            
 <editUser :user="user"/>
          </tr> 
      </tbody>
        <div v-else>No users</div>
    </table>
  </div>
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
  color:white
}

.back{
  background-image:url('https://i.postimg.cc/9XqPWC8k/za-Forza-Horizon-4.jpg') ;
  height: 100vh;
}

.btn {
 color: black;
 background-color:rgba(255, 151, 0, 1) ;
 border: 2px solid rgba(255, 151, 0, 1);
 margin: 5px;
}

.btn:hover{
  background-color:rgba(251, 75, 2, 1) ;
}
</style>