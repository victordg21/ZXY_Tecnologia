<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <img src="../assets/images/logo.png" alt="Logo da Empresa">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <h4 class="products">Produtos</h4>
                    <ul>
                        <li>
                            <a href="">ZXY Software</a>
                        </li>
                        <li>
                            <a href="">ZXY Service Managment</a>
                        </li>
                        <li>
                            <a href="">Trello</a>
                        </li>
                        <li>
                            <a href="">ZXY Align</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <h4 class="recurses">Recursos</h4>
                    <ul>
                        <li>
                            <a href="">Suporte Técnico</a>
                        </li>
                        <li>
                            <a href="">Comunidade ZXY</a>
                        </li>
                        <li>
                            <a href="">Marketplace</a>
                        </li>
                        <li>
                            <a href="">Minha Conta</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <h4 class="about">Sobre a ZXY</h4>
                    <ul>
                        <li>
                            <a href="">Empresa</a>
                        </li>
                        <li>
                            <a href="">Carreiras</a>
                        </li>
                        <li>
                            <a href="">Eventos</a>
                        </li>
                        <li>
                            <a href="">Fale Conosco</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-6 icons">
                    <a href=""><i class="bi bi-instagram icon"></i></a>
                    <a href=""><i class="bi bi-facebook icon"></i></a>
                    <a href=""><i class="bi bi-linkedin icon"></i></a>
                    <a href=""><i class="bi bi-twitter icon"></i></a>
                    <a href=""><i class="bi bi-youtube icon"></i></a>
                </div>
                <div class="col-xs-12 col-md-5 col-lg-5">
                    <p class="copy">&copy; ZXY Tecnologia - Todos os direitos reservados - 2023</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

*{
    background-color: #ebdbc2;
    color: #03273d;
}

footer{
    padding-top: 20px;
}

img{
    width: 200px;
    padding-bottom: 30px;
}

.products, .recurses, .about{ /* essas classes representam os titulos de cada tópico no rodapé*/
    padding-left: 32px;
    font-weight:bold;
    margin-bottom: 30px;
    border-bottom: 1px solid #03273d;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}

a:hover{
    font-weight: bold;
}

.icons{  /* icons representa a div que cuida dos icones de redes sociais*/
    padding-top: 20px;
    margin-left: 32px;
    font-size: 20px;
}
.icon{ /* icon representa cada icone de rede social*/
    padding-right: 15px;
    width: 32px;
    height: 32px;
}

.copy{
    padding-top: 20px;
    font-size: 14px;
    font-weight: bold;
}

@media (max-width: 767px){
    .icons, .copy{
        margin-top: 10px;
        margin-left: 32px;
    }
}

@media (max-width: 450px){
    .copy{
        font-size: 13px;
    }
}
</style>