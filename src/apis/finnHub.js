import axios from "axios"

const TOKEN = "cd5f85aad3i5nc8nu3a0cd5f85aad3i5nc8nu3ag"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})