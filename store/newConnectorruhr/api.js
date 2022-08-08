import axios from "axios"
const newConnectorruhr = axios.create({
  baseURL: "https://admin.moralis.io/web3apis",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newconnectorruhr_get__read(payload) {
  return newConnectorruhr.get(`/`)
}
export const apiService = { newconnectorruhr_get__read }
