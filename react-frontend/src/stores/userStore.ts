import { makeAutoObservable } from "mobx";

export class UserStore {

  userId: number = parseInt(sessionStorage.getItem("USER_ID") ?? "0")

  constructor(){
    makeAutoObservable(this)
  }

  setUserId = (userId: number) => {
    sessionStorage.setItem("USER_ID", userId.toString())
    this.userId = userId
  }

  logOut = ()=>{this.setUserId(0)}
}