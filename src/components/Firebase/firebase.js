import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDnAfzn9ef9kTXGhswzzXgRm1K_w07W4Hg",
    authDomain: "marvel-quiz-be8ff.firebaseapp.com",
    projectId: "marvel-quiz-be8ff",
    storageBucket: "marvel-quiz-be8ff.appspot.com",
    messagingSenderId: "1079571121472",
    appId: "1:1079571121472:web:540c0acb8d2b324c4ca6a5"
};

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    //I nscription
    signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)

    //Connexion
    loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

    //Deconnexion
    signoutUser = () => this.auth.signOut()
}

export default Firebase