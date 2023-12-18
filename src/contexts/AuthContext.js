import { getContext } from "svelte";



export const getAuthContext = () => {
  return getContext("auth")
}
