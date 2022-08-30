<template>
  <header>

  </header>

<body>


<div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <form class="form-container ">
                    <center><img src="" width="100%" height="100vh" ></center>
                    
                    <div class="form-group">
                      <label for="exampleInputEmail1">FirstName</label>
                      <input type="firtName" name="firstName" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Firstname"
                      @click="reset"
                      v-model="firstName"
                      required />
                      <small id="emailHelp" class="form-text " ></small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Surname</label>
                      <input type="surName" name="surName" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Surname"
                      @click="reset"
                      v-model="surName"
                      required />
                      <small id="emailHelp" class="form-text " ></small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" name="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email"
                      @click="reset"
                      v-model="email"
                      required />
                      
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password " class="form-control" id="" placeholder="Password"
                      required
                      v-model="password"/>
                    </div>
                    <div v-if="msg">
                        <p>{{msg}}</p>
                        
                    </div>
                    <div v-else>
                        <p>checking...</p>
                    </div>
                  
                    <button  type="button" @click="register" class="btn btn-success btn-block mt-3">Submit</button>
                  </form>
            </div>
            <!-- <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4"></div> -->

        </div>

    </div>
    </body>
</template>

<script>
export default {
data(){
        return{
            firstName:"",
            surName:"",
            email:"",
            password:"",
        };
    },
    computed:{
        msg() {
            return this.$store.state.msg;
        }
    },

      methods: {
        register() {
            const payload = {
                firstName:this.firstName,
                surName:this.surName,
                email: this.email,
                password: this.password
            };
            this.$store.dispatch("register", payload);
        },
    }
}
</script>

<style scoped>
    header{
        background-color: black;
        height: 10vh;
        margin-bottom: 20px;
        widows: 100%;
    }

body{
    background-image: url("https://i.postimg.cc/Dy1zf89c/street-light-crossing-street-lamp.jpg");
    background-size: 100% ;
   background-repeat:no-repeat;
   height: 100vh;
  
}

.form-container{
    border:2px solid rgb(139, 138, 138);
    padding: 25px 40px;
    border-radius: 10px;
   color: snow;
   margin-top: 15vh;
   -webkit-box-shadow: 2px 4px 14px 8px #000000; 
box-shadow: 4px 6px 16px 10px #000000;
   
}

.form-container:hover{
    -webkit-box-shadow: 8px 9px 40px 10px #000000; 
box-shadow: 8px 9px 40px 10px rgb(253, 253, 253);
}

#emailHelp{
    color: white;
}
</style>