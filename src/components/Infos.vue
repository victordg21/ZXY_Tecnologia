<template>
    <section id="infos">
        <div class="hero">
            <div class="container">
                <h2 class="topic">Sobre nós</h2>
                <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda quos ipsum. Provident aliquam laboriosam illum tempore doloremque
                    , quasi iusto est sunt sint commodi, voluptate non dolor voluptatibus perspiciatis nihil.Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Laborum assumenda quos ipsum. Provident aliquam laboriosam illum tempore doloremque, quasi iusto est sunt sint commodi, voluptate non
                    dolor voluptatibus perspiciatis nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda quos ipsum. Provident aliquam
                    laboriosam illum tempore doloremque, quasi iusto est sunt sint commodi, voluptate non dolor voluptatibus perspiciatis nihil.Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Laborum assumenda quos ipsum. Provident aliquam laboriosam illum tempore doloremque, quasi iusto est sunt 
                    sint commodi, voluptate non dolor voluptatibus perspiciatis nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda quos
                    ipsum. Provident aliquam laboriosam illum tempore doloremque, quasi iusto est sunt sint commodi, voluptate non dolor voluptatibus perspiciatis nihil.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

    *{
        color: #ebdbc2;
    }

    #infos{
        text-align: center;
    }

    .topic{
        padding-bottom: 30px;
    }
    .hero{
        padding: 64px 0;
        background-image: url(../assets/images/foto-de-fundo.jpg) ;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .hero .container{
        position: relative;
    }

    .hero::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        content: '';
        opacity: .8;
    }

</style>