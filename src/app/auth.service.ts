import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn=false;
  loggedInuserId=''
  constructor(public router:Router,public afAuth:AngularFireAuth) {
    this.afAuth.user.subscribe(res=>{
      if(res.uid){
        this.loggedInuserId=res.uid
        this.router.navigateByUrl('/home')
        this.isSignedIn=true
      }
      else{
        this.isSignedIn=false
      }
      
    })
   }

  SignIn(email,password){
    this.afAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isSignedIn=true;  
      this.loggedInuserId=res.user.uid
      this.router.navigateByUrl('/home')
    }).catch(res=>{
      alert(res)
    })
    /*if(email==this.email && password==this.password){
      this.isSignedIn=true;  
      this.router.navigateByUrl('/home')
    }
    else{
      this.isSignedIn=false;
      alert("Incorrect Id or Password")
    }*/
     return this.isSignedIn;
  }

  isUserSignedIn(){
    return this.isSignedIn
  }

  logout(){
    this.isSignedIn=false;
    this.afAuth.signOut()
    location.reload()
    this.router.navigateByUrl('/signin')
  }

  SignUp(email,password){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isSignedIn=true;  
      this.loggedInuserId=res.user.uid
      this.router.navigateByUrl('/home')
    }).catch(res=>{
      alert(res)
    })
  }

  getUserId(){
    return this.loggedInuserId
  }
}
