
export function notLoggedIn() {
    const token = localStorage.getItem("token");
    const welcomeContainer = document.querySelector(".homepage-text");

    if (token === null) {
        welcomeContainer.innerHTML = `<p>Please register or login to bid</p>
                                        <div class="homepage-buttons">
                                            <a href="/profile/register/">
                                                <button class="btn btn-home mx-4" type="submit">REGISTER</button>
                                            </a>
                                            <a href="/profile/login/">
                                                <button class="btn  btn-home mx-4" type="submit">LOG IN</button>
                                            </a>
                                        </div>`
    }
}