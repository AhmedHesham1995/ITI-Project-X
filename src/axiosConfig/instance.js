import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api-3m0a.onrender.com'
})

export default instance