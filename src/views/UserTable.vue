<template>
    <div class="container">
    <h2 style="color: black;">Admin Table</h2>
    <table class="table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>email</th>
          <th>password</th>
          
          <th>edit/delete</th>

         
          
         
          
         
          
        </tr>
      </thead>
      <tbody v-if="products">
            <tr v-for="product in products" :key="product.id">
              <td>{{  }}</td>
              <td>{{ }}</td>
            <td></td>
            <td></td>
            <td></td>
            <td><button>delete</button>
            <button>Edit</button>
            </td>
            
    
           
            
 
          </tr> 
      </tbody>
        <div v-else>No data</div>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


     header{
    background-color: black;
    height: 10vh;
    overflow-x:hidden;
  
  }
    
</style>