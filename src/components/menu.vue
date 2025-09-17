<template>

    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">
                <img src="https://crystalpng.com/wp-content/uploads/2023/04/BTS-Logo.png" alt="Logo" class="logo">
            </a>
            
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#inicio" class="nav-link active">Inicio</a>
                </li>
                <li class="nav-item">
                    <a href="#conciertos" class="nav-link">Conciertos</a>
                </li>
                <li class="nav-item">
                    <a href="#albumes" class="nav-link">Álbumes</a>
                </li>
            </ul>
            
        </div>
    </nav>

</template>

<script>

</script>

<style>

.navbar{
    height: 100px;
    font-size: larger;
}

.navbar {
    background-color: #d4a4f7;
    border-bottom: 1px solid #b899c7;
    padding: 10px 0;
}
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.logo {
    height: 100px;
    width: auto;
}
.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}
.nav-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    transition: color 0.3s ease;
}
.nav-link:hover {
    color: #f0e6f5;
}
.nav-link.active {
    color: #F0E6EF;
    font-weight: bold;
    background-color: #8f78b1;
    padding: 10px;
    border-radius: 8px;
}


</style>