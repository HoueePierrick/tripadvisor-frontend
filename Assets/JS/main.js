document.addEventListener("DOMContentLoaded", () => {
    console.log(`Document loaded`)
    const connection = document.getElementById(`connection`)
    connection.addEventListener(`click`, e => {
        const element = document.getElementById("modal")
        element.classList.remove("hidden")
        const informs = document.querySelectorAll(".inform")
        for(let i =0; i < informs.length; i++) {
            informs[i].classList.remove("hidden")
            console.log(informs[i])
        }
        const hidden2s = document.querySelectorAll(".hidden2")
                for(let i=0; i < hidden2s.length; i++) {
                    hidden2s[i].style.display ="none";
                }
        document.querySelector("body").classList.add("dont-scroll")
        const connection_cross = document.querySelector("#modal > form > i")
        connection_cross.addEventListener(`click`, e => {
            element.classList.add("hidden")
        })
        document.querySelector(`#modal > form`)
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                const formdata = document.querySelector("#form").childNodes 
                const data = {
                    Prénom: formdata[7].value,
                    Nom: formdata[9].value,
                    Email: formdata[11].value,
                    Text: formdata[13].value
                }
                const response = await axios.post("https://tkhanzira-dial-trip-advisor.herokuapp.com/connexion",data)
                console.log(response)
                for(let i =0; i < informs.length; i++) {
                    informs[i].classList.add("hidden")
                }
                for(let i=0; i < hidden2s.length; i++) {
                    hidden2s[i].style.display = "initial";
                }
                document.querySelector(`.comeback`)
                    .addEventListener("click", e => {
                        element.classList.add("hidden")
                    })
                document.querySelector("body").classList.remove("dont-scroll")
            })
        })
})