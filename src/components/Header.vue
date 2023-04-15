<template>
    <header class="navbar navbar-expand-lg sticky-top"> 
        <div class="container">
            <h1 class="navbar-brand m-0">ZXY Tecnologia</h1>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="navbar-collapse collapse justify-content-end" id="menu">
                <ul class="nav nav-pills d-block d-md-flex">
                    <li class="nav-item">
                        <a href="" class="nav-link">Início</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Serviços</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">Contato</a>
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

@media (max-width: 1023px){
    .nav-link{
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: center;
        border-bottom: 10px solid;
    }
}

</style>