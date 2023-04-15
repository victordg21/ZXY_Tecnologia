<template>
    <section id="services">
        <div class="container">
            <h2 class="services">Serviços</h2>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/consultoria.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Consultoria de TI</h3>
                            <p class="card-text">A ZXY Tecnologia é uma empresa líder em consultoria de TI, especializada em fornecer soluções abrangentes para empresas de todos os tamanhos. 
                                Com uma equipe altamente qualificada de especialistas em tecnologia da informação, a ZXY Tecnologia oferece um serviço completo de consultoria que abrange desde 
                                a avaliação de necessidades tecnológicas até a implementação e gerenciamento de soluções inovadoras.</p>
                            <a class="button" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/desktop.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Desenvolvimento Desktop</h3>
                            <p class="card-text">A ZXY Tecnologia é uma empresa especializada em desenvolvimento de aplicações desktop personalizadas para atender às necessidades exclusivas de 
                                negócios de seus clientes. Com anos de experiência no setor de TI, a ZXY Tecnologia oferece um serviço completo de desenvolvimento de aplicações desktop de alta 
                                qualidade, desde a concepção até a implementação e suporte contínuo.</p>
                            <a class="button" href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="card">
                    <img src="../assets/images/suporte.jpg" alt="">
                        <div class="card-body">
                            <h3 class="card-title">Suporte a Infraestrutura</h3>
                            <p class="card-text">A ZXY Tecnologia é uma empresa líder em suporte de infraestrutura especializado em cloud, oferecendo serviços abrangentes para empresas que buscam 
                                aproveitar o poder da computação em nuvem. Com uma equipe experiente de especialistas em infraestrutura e cloud computing, a ZXY Tecnologia oferece suporte técnico, 
                                monitoramento e gerenciamento de infraestrutura em nuvem de forma eficiente e confiável.</p>
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

.services{
    text-align: center;
    padding-bottom: 30px;
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
    height: 350px;
}

@media (max-width: 1399px) and (min-width: 1200px){
    .card-body{
    height: 420px;
}
}
@media (max-width: 1199px) and (min-width: 992px){
    .card-body{
        height: 480px;
    }

    .card{
        margin-bottom: 20px;
    }
}

@media (max-width: 991px) and (min-width: 768px){

    .card-body{
        height: 430px;
    }
    .card{
        margin-bottom: 40px;
    }
}

@media (max-width: 767px){
    .card-body{
        height: 310px;
    }

    .card{
        margin-bottom: 40px;
    }
}
</style>