<template>
    <section id="services">
        <div class="container">
            <h2 class="topic">Serviços</h2>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <router-link to="/Services">
                        <img data-aos="fade-right" class="images consultoria" src="../../assets/images/consultoria.png" alt="Foto da Consultoria">
                    </router-link>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <router-link to="/Services">
                        <img data-aos="fade-down" class="images desenvolvimento" src="../../assets/images/desenvolvimento.png" alt="Foto do Desenvolvimento de Aplicações">
                    </router-link>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                    <router-link to="/Services">
                        <img data-aos="fade-left" class="images suporte" src="../../assets/images/suporte.png" alt="Foto do Supore a Infraestrurura">
                    </router-link>
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

#services{
    padding: 40px 0;
}

.topic{
    text-align: center;
    padding-bottom: 30px;
    font-weight:600;
}

.images{
    height: 500px;
}

.desenvolvimento,.consultoria,.suporte{
    margin: 0 auto;
    display: block;
}

img:hover{
    transition: .5s;
    transform: scale(1.05);  /* Aumenta tamanho da imagem quando passar o mouse por cima*/ 
}

</style>