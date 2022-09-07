<template>
    <div id="Footer">

        <div class="container">

            <div class="row">
                
                    <div class="col-md-4">
                        <h2>Mogamats Mustangs</h2>
                        <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    </div>
                     <div class="col-md-4">
                    <h2>Pages</h2>
                <ul id="contact">
                    <li>
                        <router-link to="/"
          > HOME</router-link
        >
                        
                    </li>
                    <li>
                        <router-link to="/products"
          > SHOP</router-link
        >

                    </li>
                    <li>
                        <router-link to="/about"
          > ABOUT</router-link
        >

                    </li>
                    <li>
                      <router-link to="/contact"
          > CONTACT</router-link
        >

                    </li>
                    
                </ul>
            </div>

             <div class="col-md-4 contactdetails">
                <h2>Contact</h2>
                <ul>
                    <li>
                        Call: <span> +27(0)83 598 9156</span>
                    </li>
                    <li>
                        Email: <span>mogamatsmustangs@gmail.com</span> 
                    </li>
                    <li>
                        Address:
                    </li>
                    <li>
                        shop76, Somwhere place
                    </li>
                    <li>
                        98 Nowhere Avenue,
                    </li>
                    <li>Cape Town</li>
                </ul>
            </div>


                </div>
           

           
            <div id="hr" class="row">
                <div class="col-12">
                    <hr>
                    <strong>&copy;2022 Mogamats Mustangs. All Rights Reserved |</strong> Designed by <span id="name"> Mogamat Saleem Ariefdien</span>
                </div>
                 
            </div>
        </div>

    </div>
</template>


    
    <style scoped>

.bi-instagram{
    font-size: 2rem;
    margin: 5px;
    color: white;
}
.bi-instagram:hover{
    color: rgba(255, 151, 0, 1);
}
.bi-facebook{
    font-size: 2rem;
    margin: 2px;
    color: white;
}
.bi-facebook:hover{
    
    color: rgba(255, 151, 0, 1);
}

.bi-twitter{
    font-size: 2rem;
    margin: 2px;
    color: white;
}
.bi-twitter:hover{
    
    color: rgba(255, 151, 0, 1);
}

    .contactdetails > ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
    };
        i{
            color: white;
            font-size: 2rem;
            padding: 2%;
        }
        ul li{
            list-style: none;
            color: white;
            font-size: 20px;
            
            
        }
         ul li a{
            color:  rgba(255, 151, 0, 1) ;
            font-size: 20px;
            text-decoration-line: none;
            
        
        }
     ul li a:hover {
        text-decoration-line: underline;
     } 
        
   
        
         ul li a:hover{
            color: white;
            
            
        }
       
        span{
            color:rgba(255, 151, 0, 1);
            font-size: 18px;
        }
        #contact {
            margin-right: 10%;
            
        }
        
      #Footer{
        /* background: url('');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh; */
        background: 
        linear-gradient(rgba(0, 0, 0, 0.7), black),
        
        url("https://i.postimg.cc/QCQhBxLQ/2034-612x612.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        padding-right: 3%;
     }
      .container{
        padding-top: 10%;
        
        
      }
      #hr{
        padding-top: 5%;
        color: white;
      }
      h2{
        color: white;
      }
      #name{
        font-size: 20px;
      }

</style>