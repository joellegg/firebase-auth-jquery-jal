// Initialize Firebase
var config = {
apiKey: "AIzaSyDXI6Rc4FlG3dMtj7CBGNtHfsdT9bohsiw",
authDomain: "c17-jquery-auth-4890f.firebaseapp.com",
databaseURL: "https://c17-jquery-auth-4890f.firebaseio.com",
storageBucket: "c17-jquery-auth-4890f.appspot.com",
messagingSenderId: "569123610301"
};
firebase.initializeApp(config);

// event listener
firebase.auth().onAuthStateChanged(() => {
    if (firebase.auth().currentUser !== null) {
        let email = firebase.auth().currentUser.email;
        //logged in
        $('.login-page').addClass('hidden');
        $('.main-page').removeClass('hidden');
        $('.main-page h1').text(`Welcome ${email}`);
    } else {
        //logged out
        $('.login-page').removeClass('hidden');
        $('.main-page').addClass('hidden');
    }
})

$('.form-signin').submit((e) => {
    e.preventDefault();

    let email = $('input[type="email"]').val();
    let password = $('input[type="password"]').val();

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            // reset the form to empty when you log out
            $('form')[0].reset();
        })
});


//////////////////////////////
/////     sign out      //////
//////////////////////////////
$('.main-page > button').click(() =>
    //console.log('clicked')
    firebase.auth().signOut()
);


////////////////////////////
////   add new user     ////
////////////////////////////
$('#register').click((e) => {
    e.preventDefault();

    let email = $('input[type="email"]').val();
    let password = $('input[type="password"]').val();
    //console.log('register me');
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            // reset the form to empty when you log out
            $('form')[0].reset();
        });
});

////////////////////////////
////    to do list    //////
////////////////////////////
$('.main-page form').submit(() => {
    let task = $('.main-page form input[type="text"]').val();
    $.post
});
