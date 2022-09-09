<template>
  <!-- <header>

  </header> -->

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
        /* widows: 100%; */
    }

body{
    background-image: url("https://i.postimg.cc/MGv7NJgz/6947-ford-mustang-car-brand-logo-wallpaper-file-hd.jpg");
    background-size:cover ;
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

.link{
  text-decoration: none;
  color: rgba(251, 75, 2, 1);
  
}
#list{
  margin-top: 30px;
   /* the color  */
   --c: rgba(255, 151, 0, 1);
  /* the height */
  --h: 1.2em;

  line-height: var(--h);  
  color: #0000;
  overflow: hidden;
  text-shadow: 
    0 calc(-1 * var(--h) * var(--_i, 0)) var(--c), 
    0 calc(var(--h) * (1 - var(--_i, 0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));
}


#list:hover{
  --_i: 1;
  color: white;
}
.custom-btn {
 width: 130px;
 height: 40px;
 color: #fff;
 border-radius: 5px;
 padding: 10px 25px;
 font-family: 'Lato', sans-serif;
 font-weight: 500;
 background: transparent;
 cursor: pointer;
 transition: all 0.3s ease;
 position: relative;
 display: inline-block;
 box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
 outline: none;
}

.line{
  color: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  background-color: black;
}
.btn {
 background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
 line-height: 42px;
 padding: 0;
 border: none;
}

.btn span {
 position: relative;
 display: block;
 width: 100%;
 height: 100%;
}

.btn:before,
.btn:after {
 position: absolute;
 content: "";
 right: 0;
 bottom: 0;
 background: rgba(251, 75, 2, 1);
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
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
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
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
#navigation{
  display: flex;
  justify-content: space-between;
  background-color: black;
}

ul{
  padding: 0;
  list-style: none;
  
}
</style>