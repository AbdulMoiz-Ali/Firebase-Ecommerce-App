import {
    app,
    auth,
    collection,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
} from "./../conforgration file/app.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
        getDoc(doc(db, "users", uid))
            .then((snapshot) => {
                const userData = snapshot.data();

                const name = document.getElementById("name-add");
                const email = document.getElementById("email-add");
                name.innerHTML = userData.firstname;
                email.innerHTML = userData.email;
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({ uid, firstName: userData.firstname })
                );
                // getAllProducts();
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(userData)
        console.log(uid, "===> loged in");
    } else {
        window.location.href = "./index.html";
    }
});

const logout_btn = document.getElementById("btn-logout");

logout_btn.addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem("currentUser");
            window.location.href = "./index.html"
        })
        .catch((error) => {
            // An error happened.
        });
});


const productfoam1 = document.getElementById("productfoam1");
const productfoam2 = document.getElementById("productfoam2");



productfoam1.addEventListener("submit", (e) => {
    productfoam1.style.display = "none";
    productfoam2.style.display = "block";
    e.preventDefault();
    const title = e.srcElement[0].value;
    const pries = e.srcElement[1].value;
    const category = e.srcElement[2].value;
    const Condition = e.srcElement[3].value;
    const description = e.srcElement[4].value;
    console.log(title, pries, category, Condition, description);

})
// const next = document.getElementById("next");
// next.addEventListener("click", (e) => {
//     e.preventDefault();

// })
const creatpro = document.getElementById("creatpro");
productfoam2.addEventListener("submit", (e) => {
    e.preventDefault();
    // const imgpro = document.getElementById("dropzone-file").file;
    // const img = e.srcElement[0].files[0].name;
    const img = e.srcElement[0].files;
    console.log(img);
    creatpro.style.display = "none";
    productfoam2.style.display = "none";
    // const inputallfeild = document.getElementById("inputallfeild");
})