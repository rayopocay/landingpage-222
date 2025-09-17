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
    height: 150px;
}

.navbar {
    background-color: #c8a8d8;
    border-bottom: 1px solid #b899c7;
    padding: 10px 0;
}
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 30px;
}
.logo {
    height: 40px;
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
    color: #f0e6f5;
    font-weight: bold;
}
</style>