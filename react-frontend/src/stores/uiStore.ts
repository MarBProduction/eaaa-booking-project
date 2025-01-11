import { makeAutoObservable } from "mobx";

export class UiStore {

  showLoader: boolean = false

  constructor(){
    makeAutoObservable(this)
  }

  setShowLoader = (showLoader: boolean) => {
    this.showLoader = showLoader
  }
}