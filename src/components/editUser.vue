<template>
  <div :id="'updateuser'+user.user_id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
             <!-- name -->
              <div class="mb-3">
                <label for="Name" class="form-label">User Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="user.firstName"
                  name="addName"
                  id="addName"
                  placeholder="user Name"
                  required
                />
              </div>
             <!-- surname -->
              <div class="mb-3">
                <label for="Name" class="form-label">User surname:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="user.surName"
                  name="addSurnmae"
                  id="addSurname"
                  placeholder="user Surname"
                  required
                />
              </div>
           
            <!-- email -->
              <div class="mb-3">
                <label for="addPrice" class="form-label">Email</label>
                <input
                  class="form-control"
                  type="text"
                  name="edit email"
                  id="edit email"
                  v-model="user.email"
                  placeholder="Email"
                />
              </div>
               <!-- password -->
              <!-- <div class="mb-3">
                <label for="addPrice" class="form-label">Password</label>
                <input
                  class="form-control"
                  type="text"
                  name="editPassword"
                  id="editPassword"
                  v-model="user.password"
                  placeholder="password"
                />
              </div> -->
              
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
    props: ["user"],
    methods: {
        update() {
            return this.$store.dispatch("editUser",this.user)
        }
    }

}
</script>

<style>

</style>