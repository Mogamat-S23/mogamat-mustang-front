<template>
<header>

</header>
  <div class="container">
    <div>
        <div class="row">
            <div class="col-md-6">
                <img class="mx-auto img-fluid rounded-circle" :src="user.profile" alt="">
                <h2>
                    User: {{user.firstName}}
                </h2>
            </div>
            <div class="col-md-6">
                <form>
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
               
              <button type="button"
              class="btn btn-primary" 
              @click="this.$store.dispatch('editUser', user)">
              Update Details</button>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        user(){
            return this.$store.state.user;
        }
    }
}
</script>

<style scoped>
header{
    background-color: black;
    height: 10vh;
  }
</style>