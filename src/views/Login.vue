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
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                      @click="reset"
                      v-model="email"
                      required />
                      <small id="emailHelp" class="form-text " >We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password " class="form-control" id="exampleInputPassword1" placeholder="Password"
                      required
                      v-model="password"/>
                    </div>
                    <div v-if="msg">
                        <p>{{msg}}</p>
                        
                    </div>
                    <div v-else>
                        <p>checking...</p>
                    </div>
                  
                    <button  type="button" @click="login" class="btn btn-success btn-block mt-3">Submit</button>
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
            email:"",
            password:"",
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        msg() {
            return this.$store.state.msg;
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            };
            this.$store.dispatch("login", payload);
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

