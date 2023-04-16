<template>
    <section id="services">
        <div class="container">
            <h2 class="topic">Serviços</h2>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <a href="">
                        <img class="images consultoria" src="../assets/images/consultoria.png" alt="">
                    </a>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <a href="">
                        <img class="images desenvolvimento" src="../assets/images/desenvolvimento.png" alt="">
                    </a>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                    <a href="">
                        <img class="images suporte" src="../assets/images/suporte.png" alt="">
                    </a>
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
}

.images{
    height: 500px;
}

.desenvolvimento,.consultoria,.suporte{
    margin: 0 auto;
    display: block;
}

img:hover{
    transform: scale(1.05);
}

</style>