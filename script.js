/*id flip anim*/
const idCard =
    document.getElementById("idCard");

const contactLink =
    document.querySelector(
        'a[href="#contact"]'
    );

/*clicking card*/
idCard?.addEventListener("click", () => {
    idCard.classList.toggle("flipped");

});

/*click cont nav*/
contactLink?.addEventListener("click", (event) => {
    event.preventDefault();
    idCard?.classList.add("flipped");
    document
        .getElementById("home")
        ?.scrollIntoView({
            behavior: "smooth"
        });
});

/*course req.*/
const dropdown =
    document.querySelector(".dropdown");

const requirementsToggle =
    document.getElementById(
        "requirementsToggle"
    );

const folders =
    document.getElementById(
        "folderContainer"
    );

const display =
    document.getElementById(
        "requirementDisplay"
    );

let activeRequirement = null;

/*course req. button*/
requirementsToggle?.addEventListener(
    "click",
    (event) => {
        event.preventDefault();
        /** If a requirement is currently open,
         * clicking COURSE REQUIREMENTS again
         * returns to the three folders.*/
        if (activeRequirement) {
            resetRequirements();
            dropdown.classList.remove("open");
            return;
        }
        /** Otherwise open/close dropdown.*/
        dropdown.classList.toggle("open");
    }
);

/*drowpdown links*/
document
    .querySelectorAll(
        ".dropdown-menu a[data-section]"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const requirement =
                    link.dataset.section;


                showRequirement(
                    requirement
                );


                dropdown.classList.remove(
                    "open"
                );


                document
                    .getElementById(
                        "requirements"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });

/*click folder*/
function toggleRequirement(requirement) {
    /** Clicking the same folder again
    ** returns to the three folders.*/
    if (
        activeRequirement === requirement
    ) {
        resetRequirements();
        return;
    }
    showRequirement(requirement);
}

/*show course req.*/
function showRequirement(requirement) {

    const selected = document.getElementById(
            requirement);

    if (!selected) return;

    /**hide cont*/

    document
        .querySelectorAll(
            ".requirement-content"
        )
        .forEach(content => {
            content.classList.remove("active");
        });

    /** Hide folders.*/
    folders.style.display ="none";

    /** Show selected content.*/
    display.style.display ="block";
    selected.classList.add("active");
    activeRequirement = requirement;
}

/*reset requi.*/

function resetRequirements() {
    /**hide req content*/
    document
        .querySelectorAll(".requirement-content")
        .forEach(content => {content.classList.remove("active");});
    /**show folder*/
    folders.style.display ="grid";
    /**hide cont*/
    display.style.display ="none";
    activeRequirement =null;
}

/*drop down closing*/
document.addEventListener("click", event => {
        if (dropdown && !dropdown.contains(event.target)) 
            {dropdown.classList.remove("open");}
    }
);