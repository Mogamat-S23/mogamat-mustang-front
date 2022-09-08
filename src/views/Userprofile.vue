<template>
<!-- <header>

</header> -->
<div class="background">


  <div class="container">
    <div>
        <div class="row">
            <div class="col-md-6">
                <img class="mx-auto img-fluid rounded-circle" :src="user.userProfile" alt="" id="user">
                <h2>
                    User: {{user.firstName}}
                </h2>
            </div>
            <div class="col-md-6">
                <form id="userForm">
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
            <!-- Profile picture -->
              <div class="mb-3">
                <label for="addPrice" class="form-label"
                style="border-radiuse:20%;">Profile picture url</label>
                <input
                  class="form-control"
                  type="text"
                  name="edit email"
                  id="edit profile"
                  v-model="user.userProfile"
                  placeholder="profile picture url"
                />
              </div>
              
               <!-- <div class="col-6">
                <img src="https://i.postimg.cc/TPNnfPqV/plchldr798automanager.png" alt="">
               </div> -->
              <button type="button"
              class="btn btn-light" 
              @click="this.$store.dispatch('editUser', user)">
              Update Details</button>
                </form>
            </div>
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
  .container{
    min-height: 10vh;
    color: white;
  }
/*  
   .row{
    margin-top: 150px;
  }  */
  .background{
    background-image: url('https://i.postimg.cc/j2Y9pc7k/orza-Horizon-4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 1;
  
  }

  #user{
    margin-top:150px;
  }

  #userForm{
    margin-top: 150px;
  }


  .btn{
    background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  }

  .btn:before,
.btn:after {
 position: absolute;
 content: "";
 right: 0;
 bottom: 0;
 background: rgba(251, 75, 2, 1);
 /* box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3); */
 transition: all 0.3s ease;
}

.btn:before {
 height: 0%;
 width: 2px;
}

.btn:after {
 width: 0%;
 height: 2px;
}

.btn:hover {
 color: rgba(251, 75, 2, 1);
 background: transparent;
}

.btn:hover:before {
 height: 100%;
}

.btn:hover:after {
 width: 100%;
}

.btn span:before,
.btn span:after {
 position: absolute;
 content: "";
 left: 0;
 top: 0;
 background: rgba(251, 75, 2, 1);
 /* box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3); */
 transition: all 0.3s ease;
}

.btn span:before {
 width: 2px;
 height: 0%;
}

.btn span:after {
 height: 2px;
 width: 0%;
}

.btn span:hover:before {
 height: 100%;
}

.btn span:hover:after {
 width: 100%;
}
</style>