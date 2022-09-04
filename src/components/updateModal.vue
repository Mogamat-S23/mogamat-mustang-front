<template>
  <div :id="'update'+product.product_id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
             <!-- name -->
              <div class="mb-3">
                <label for="addName" class="form-label">Product Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="product.productName"
                  name="addName"
                  id="addName"
                  placeholder="Enter car Name:"
                  required
                />
              </div>
            <!-- main Image-->
              <div class="mb-3">
                <label for="addImage" class="form-label">Main Image</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="product.mainImage"
                  placeholder="Add image url"
                />
              </div>
            <!-- Image2-->
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Image 2</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="product.image2"
                  placeholder="Add image url"
                />
              </div>
            <!-- image3-->
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Image 3</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="product.image3"
                  placeholder="Add image url"
                />
              </div>
            <!-- Image4-->
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Image 4</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="product.image4"
                  placeholder="Add image url"
                />
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Description</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.carDescription"
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
                  v-model="product.price"
                  placeholder="Add Price"
                />
              </div>
               <!-- model -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Model</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.model"
                  placeholder="car release date"
                />
              </div>
               <!-- engine -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Engine Type</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.engine"
                  placeholder="petrol or diesel"
                />
              </div>
               <!-- body type -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Body Type</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.bodyType"
                  placeholder="body type"
                />
              </div>
             <!-- seat quantity -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Seat Quantity</label>
                <input
                  class="form-control"
                  type="number"
                  name="addQuantity"
                  id="addQuantity"
                  v-model="product.seatQuantity"
                  placeholder="Quantity"
                />
              </div>
             <!-- handling -->
              <div class="mb-3">
                <label for="addQuantity" class="form-label">Handling</label>
                <input
                  class="form-control"
                  type="text"
                  name="addHandling"
                  id="addQuantity"
                  v-model="product.handling"
                  placeholder="Handling"
                />
              </div>
             
              <div class="mb-3">
                <label for="addPrice" class="form-label">Gear</label>
                <input
                  class="form-control"
                  type="text"
                  name="addPrice"
                  id="addPrice"
                  v-model="product.gear"
                  placeholder="manual or automatic"
                />
              </div>
              
            </div>
          </div>
        </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    update() {
      return this.$store.dispatch("updateProduct", this.product)
    }
  }
}
</script>