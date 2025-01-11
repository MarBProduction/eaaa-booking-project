import { createContext, useContext } from "react"
import { UserStore } from "../stores/userStore"
import { UiStore } from "../stores/uiStore"

const rootContext = createContext({
  userStore: new UserStore(),
  uiStore: new UiStore()
})

export const useStores = () => useContext(rootContext)