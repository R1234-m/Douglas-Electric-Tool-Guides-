// Douglas Electric Equipment Portal
// script.js

document.addEventListener("DOMContentLoaded", () => {

    console.log("Douglas Electric Equipment Portal Loaded");

    // -------------------------------
    // Equipment Search
    // -------------------------------

    const searchBox = document.querySelector(".hero input");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    // -------------------------------
    // Smooth Scrolling
    // -------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // -------------------------------
    // Card Hover Animation
    // -------------------------------

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // -------------------------------
    // Current Year in Footer
    // -------------------------------

    const footer = document.querySelector("footer p");

    if (footer) {

        const year = new Date().getFullYear();

        footer.innerHTML =
            "&copy; " + year + " Douglas Electric Equipment Portal";

    }

    // -------------------------------
    // Equipment Status Badge
    // -------------------------------

    document.querySelectorAll("table").forEach(table => {

        table.querySelectorAll("td").forEach(cell => {

            if (cell.innerText.includes("Ready")) {

                cell.style.color = "green";
                cell.style.fontWeight = "bold";

            }

            if (cell.innerText.includes("Inspect")) {

                cell.style.color = "#d97706";
                cell.style.fontWeight = "bold";

            }

            if (cell.innerText.includes("Check")) {

                cell.style.color = "#2563eb";
                cell.style.fontWeight = "bold";

            }

        });

    });

    // -------------------------------
    // Back To Top Button
    // -------------------------------

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.id = "topButton";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.bottom = "25px";
    button.style.right = "25px";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.background = "#0a8a43";
    button.style.color = "white";
    button.style.fontSize = "22px";
    button.style.cursor = "pointer";
    button.style.display = "none";
    button.style.boxShadow = "0 6px 18px rgba(0,0,0,.25)";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 250) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});
