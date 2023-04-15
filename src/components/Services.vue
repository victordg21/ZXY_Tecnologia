<template>
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/consultoria.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Consultoria de TI</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, possimus consequatur nam cumque laboriosam doloribus vel. Culpa officia doloribus cum totam incidunt! Vero ipsam necessitatibus earum explicabo distinctio quasi voluptatibus!</p>
                            <a class="button" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/desktop.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Desenvolvimento Desktop</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, possimus consequatur nam cumque laboriosam doloribus vel. Culpa officia doloribus cum totam incidunt! Vero ipsam necessitatibus earum explicabo distinctio quasi voluptatibus!</p>
                            <a class="button" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/suporte.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Suporte a Infraestrutura</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, possimus consequatur nam cumque laboriosam doloribus vel. Culpa officia doloribus cum totam incidunt! Vero ipsam necessitatibus earum explicabo distinctio quasi voluptatibus!</p>
                            <a class="button" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

*{
    background-color: #03273d; 
    color: #ebdbc2;
}

img{
    height: 200px;
}

#services{
    padding: 40px 0;
}

.card-title,
.card-subtitle{
    color: #ebdbc2;
}

.button{
    background-color: #ebdbc2;
    color: #03273d;
    padding: 6px;
    text-decoration: none;
    font-weight:500;
    border-radius: 6px;
}

.button:hover{
    font-weight: bold;
}

.card{
    border: 3px solid #ebdbc2;
}

.card-body{
    height: 260px;
}

@media (max-width: 1439px) and (min-width: 1024px){
    .card-body{
    height: 350px;
}
}
@media (max-width: 1023px) and (min-width: 768px){
    .card-body{
        height: 320px;
    }

    .card{
        margin-bottom: 20px;
    }
}

@media (max-width: 767px){

    .card{
        margin-bottom: 40px;
    }
}
</style>