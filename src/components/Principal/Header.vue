<template>
    <header class="navbar navbar-expand-lg sticky-top"> 
        <div class="container">
            <img src="../../assets/images/logo.png" alt="Logo da Empresa">
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="navbar-collapse collapse justify-content-end" id="menu">
                <ul class="nav nav-pills d-block d-md-flex">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Início</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Serviços</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Contact" class="nav-link">Contato</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>

    .navbar-brand{
        color: #2B4257;
        cursor: pointer;
        padding: 8px 0;
    }
    .navbar{
        background-color: #ebdbc2;
    }

    .nav .nav-link{
        color: #2B4257;
    }

    .nav .nav-link:hover,
    .navbar-brand:hover{
        color: #03273d;
        font-weight: bold;
    }

    .navbar-collapse{
        transition: .5s;
    }

    img{
        margin-left: 100px;
        width: 150px;
    }

    @media (max-width: 1023px){
        .nav-link{
            margin-top: 20px;
            margin-bottom: 10px;
            text-align: center;
        }

        img{
            margin-left: 0;
        }

    @media (max-width: 767px){

        .nav-link{
            border-bottom: 10px solid;
        }

    }
    }
</style>