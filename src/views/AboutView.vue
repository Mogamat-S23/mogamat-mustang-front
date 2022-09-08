<template>
<div class="about">
  <div class="container">
   <div class="row">
    <div class="col-md-6">
        <h1>
          Welcome to Mogamats Mustangs
        </h1>
        <p> Mogamats Mustangs are there for all those mustang lovers.
        The Ford Mustang is one of the world's most iconic cars and remains the world's best-selling sports car. The Mustang nameplate has been in service since 1964 and continues to sell well, to this day. Testament to its design and value.</p>
        <p>We at Mogamats Mustangs strive to deliver the best mustangs 
          and to make sure our customers are satisfied.
        </p>
          <br>
          <br>
          <div id="card" class="col-12 ">
              <div class=" card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow img-fluid"
                      src="https://i.postimg.cc/bv9cp4dW/Saleem-2.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-light text-center">
                    <h1>Mogamat Saleem Ariefdien</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-light text-center role">
                      Aspiring Web Developer
                    </h2>
                  </div>
                  <div class="box">
                    <div>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a  id="ref" href="https://github.com/Mogamat-S23" target="_blank"> <i class="fab fa-github text-light"></i></a>
                        </li>
                        <li class="list-inline-item">
                          <a id="ref" href="https://www.linkedin.com/in/mogamat-saleem-ariefdien-808966196/" target="_blank"><i class="fab fa-linkedin-in text-light"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
   </div>
  </div>
  </div>
  

</template>

<script>
  export default{

  }
</script>

<style scoped>

h1{
  
 
  color: #db6216;
  background-image: -webkit-linear-gradient(0deg, #db6216 55%, #cccf1d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
}


.about{
  background-image: url('https://i.postimg.cc/j2Y9pc7k/orza-Horizon-4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 1.9;
  min-height: auto;
  width: 100%;
  color: white;
}
.container{
  padding-top: 100px;
  padding-bottom: 50px;
}

#card{
  box-shadow: 0 0 20px #eee;
  border-radius: 1rem;
}
.card {
  background: transparent;
  box-shadow: 0 0 20px #eee;
  border: 1;
  border-radius: 1rem;
}
.img-hover-zoom--colorize img {
  border-radius: 10%;
  width: 150px;
  height: auto;
  margin-top: 20px;
  padding: 1px;
  transition: transform 0.5s;
  filter: grayscale(100%);
}
.img-hover-zoom--colorize:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}
.card h5 {
  overflow: hidden;
  height: 80px;
  font-weight: 300;
  font-size: 1rem;
}
.card h5 a {
  color: black;
  text-decoration: none;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab {
  font-size: 1.5rem;
  color: black;
  transition: transform 0.5s;
}
.fab:hover {
  color: black;
  transform: scale(1.1);
}
.card h2 {
  font-size: 1rem;
}
/* MEDIA */
@media only screen and (min-width: 1200px) {
  .img-hover-zoom--colorize img {
    width: 200px;
  }
}
@media only screen and (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
}
/* for headers */
section {
  padding: 60px 0;
  min-height: 100vh;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg-gray {
  background-color: #f9f9f9;
}
</style>