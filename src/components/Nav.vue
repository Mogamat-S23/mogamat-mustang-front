<template>
     <header>
        <nav class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="text-white">=</span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  ms-auto">
                  <li class="nav-item">
                    <router-link to="/">Home |
                       </router-link>
                    
                  </li>
                  <li class="nav-item">
                    <router-link to="/products">Shop |
                       </router-link>
                    
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin">admin  |
                       </router-link>
                    
                  </li>
                  <li class="nav-item">
                    <router-link to="/login">Login |
                       </router-link>
                    
                  </li>
                  <li class="nav-item">
                    <router-link to="/register">Register
                       </router-link>
                    
                  </li>
                  
                  <!-- <li class="nav-item">
                    <router-link >
                        <a class="nav-link px-4 text-white" href="#">Pricing</a>
                    </router-link>
                  
                  </li> -->
                 
                </ul>
              </div>
            </div>
          </nav>
      </header>
</template>

<script>


export default {
   
}
</script>

<style scoped>
nav{
    background-color: transparent;
    overflow:hidden;
    position: fixed;
 
}


</style>