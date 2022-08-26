<template>
    <div class="container">
    <h2 style="color: black;">Admin Table</h2>
    <table class="table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Main Image</th>
          <th>Image 2</th>
          <th>Image 3</th>
          <th>Image 4</th>
          <th>Description</th>
          <th>price</th>
          <th>Model</th>
          <th>Engine</th>
          <th>Body Type</th>
          <th>Seat quantity</th>
          <th>handling</th>
          <th>gear</th>
          <th>edit/delete</th>

         
          
          <th scoped="col">
            <!-- <a class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             </a> -->
            <button id="btnSubmit1" class="btn" data-bs-toggle="modal"  data-bs-target="#addnew">
             + Add</button>
          </th>
          
         
          
        </tr>
      </thead>
      <tbody v-if="products">
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.product_id }}</td>
              <td>{{ product.productName }}</td>
            <!-- <td>{{ product.mainImage}}</td>
            <td>{{ product.image2}}</td>
            <td>{{ product.image3}}</td>
            <td>{{ product.image4}}</td> -->
            <td><img :src="product.mainImage" alt="" style="width:213px; height:160px;" /></td>
            <td><img :src="product.image2" alt=""/></td>
            <td><img :src="product.image3" alt=""/></td>
            <td><img :src="product.image4" alt=""/></td>
            
            <td>{{ product.carDescription}}</td>
            <!-- <td><img :src="product.image2" alt="" /></td> -->
            <td>R{{ product.price }}.00</td>
            <td>{{ product.model}}</td>
            <td>{{ product.engine}}</td>
            <td>{{ product.bodyType}}</td>
            <td>{{ product.seatQuantity}}</td>
            <td>{{ product.handling}}</td>
            <td>{{ product.gear}}</td>
            <!-- update -->
              <!-- <td> 
                <a type="button" class="btn" 
                     data-bs-togal="modal"
                     :data-bs-target="'#update' + product.id">
                  </a>Edit</td> -->
  
          <td>
            <th scoped="col"> <button id="btnSubmit1" class="btn" data-bs-toggle="modal"  :data-bs-target="'#update'+ product.product_id">
             Edit</button></th>
             </td> 
         
          <th >
             <td scoped='col'> 
            <button type="btn" class="btn" id="btnSubmit1"
          @click="$store.dispatch('deleteProduct', product.product_id)"
                    >Delete
                  </button>
             </td>
             </th>
              

           
           <updateModal :product="product"/>  
          </tr> 
      </tbody>
        <div v-else>No data</div>
    </table>
  </div>
  <createModal />
</template>

<script>
import createModal from "@/components/createModel.vue";
import updateModal from "@/components/updateModal.vue"
export default {

    components:{createModal, updateModal},
 
  mounted() {
    this.$store.dispatch("products");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
}
</script>