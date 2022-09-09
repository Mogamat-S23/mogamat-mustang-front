<template>
  <div
    class="modal fade"
    id="addnew"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Mustang</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
             <!-- name -->
              <div class="mb-3">
                <label for="addName" class="form-label">Product Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="productName"
                  name="addtitle"
                  id="addtitle"
                  placeholder="Enter title Name:"
                  required
                />
              </div>
            <!-- image -->
              <div class="mb-3">
                <label for="addImage" class="form-label">Main Image</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addImage"
                  v-model="mainImage"
                  placeholder="Add image url"
                />
              </div>
             <!-- image 2 -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Image 2</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addImage"
                  v-model="image2"
                  placeholder="Add image url"
                />
              </div>
             <!-- image 3 -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Image 3</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addImage"
                  v-model="image3"
                  placeholder="Add image url"
                />
              </div>
             <!-- image 4 -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Image 4</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addImage"
                  v-model="image4"
                  placeholder="Add image url"
                />
              </div>

              <!-- description -->
                <div class="mb-3">
                <label for="adddescription" class="form-label">Car Description</label>
                <input
                  class="form-control"
                  type="text"
                  name="carDescription"
                  id="CarDescription"
                  v-model="carDescription"
                  placeholder="description"
                />
              </div>
            
              <!-- price -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="number"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                  placeholder="Add Price"
                />
              </div>

              <!-- model -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Model</label>
                <input
                  class="form-control"
                  type="number"
                  name="addModel"
                  id="addModel"
                  v-model="model"
                  placeholder="car release date"
                />
              </div>
              <!-- engine type -->
                <div class="mb-3">
                <label for="adddescription" class="form-label">Engine Type</label>
                <input
                  class="form-control"
                  type="text"
                  name="engineType"
                  id="engineType"
                  v-model="engine"
                  placeholder="petrol or diesel"
                />
              </div>
              <!-- body type -->
                <div class="mb-3">
                <label for="adddescription" class="form-label">Body Type</label>
                <input
                  class="form-control"
                  type="text"
                  name="bodyType"
                  id="bodyType"
                  v-model="bodyType"
                  placeholder="body type"
                />
              </div>
              <!-- seat quantity -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Seat Quantity</label>
                <input
                  class="form-control"
                  type="number"
                  name="addSeatQauntity"
                  id="addSeatQauntity"
                  v-model="seatQuantity"
                  placeholder="number of seats"
                />
              </div>

              <!-- handling -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Handling</label>
                <input
                  class="form-control"
                  type="text"
                  name="addhandling"
                  id="addhandling"
                  v-model="handling"
                  placeholder="Handling"
                />
              </div>
              <!-- gear -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Gear</label>
                <input
                  class="form-control"
                  type="text"
                  name="addgear"
                  id="addgear"
                  v-model="gear"
                  placeholder="manual or automatic"
                />
              </div>
            
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="add"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      productName:"",  
      mainImage: "https://i.postimg.cc/pXCh59Ts/Untitlr4teyued-1.png",
      image2:"https://i.postimg.cc/pXCh59Ts/Untitlr4teyued-1.png",
      image3:"https://i.postimg.cc/pXCh59Ts/Untitlr4teyued-1.png",
      image4:"https://i.postimg.cc/pXCh59Ts/Untitlr4teyued-1.png",
      carDescription:"",
      price:"",
      model:"",
      engine:"",
      bodyType:"",
      seatQuantity:"",
      handling:"",
      gear:""
    };
  },
  methods: {
    add() {
      return this.$store.dispatch("addProduct", {
        productName:this.productName, 
        mainImage:this.mainImage,
        image2:this.image2,
        image3:this.image3,
        image4:this.image4,
        carDescription:this.carDescription,
        price:this.price,
        model:this.model,
        engine:this.engine,
        bodyType:this.bodyType,
        seatQuantity:this.seatQuantity,
        handling:this.handling,
        gear:this.gear

        
      });
    },
  },
};

</script>