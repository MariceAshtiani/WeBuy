export function checkAuth() {
    const token = localStorage.getItem("token");
    const navMenu = document.querySelector(".nav-menu");


    if (token != null) {
        navMenu.innerHTML = `<li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/listings/">Listings</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/listing/create/">New listing</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  data-bs-toggle="dropdown"
                                aria-expanded="false">Profile</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/profile/">View Profile</a></li>
                                <li><a class="dropdown-item" href="/profile/edit/">Edit Profile</a></li>
                                <li><a class="dropdown-item logout" >Log out</a></li>
                            </ul>
                        </li>
                            `;
    } else {
        navMenu.innerHTML = `<li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile/register/">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/profile/login/">Log In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/listings/">Listings</a>
                            </li>
                            `;
    }

    const navLinks = document.querySelectorAll(".nav-link")
    const pathname = window.location.pathname;

    navLinks.forEach(navLink => {
        if (navLink.href.includes(pathname)) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    })
}

