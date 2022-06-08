const prod = {
    url: {
     API_URL: `https://rzayevgara-projectx.netlify.app/daxil-ol`,
     }
   }
   const dev = {
    url: {
     API_URL: `http://localhost:3000/daxil-ol`
    }
   }
   export const config = process.env.NODE_ENV === `development` ? dev : prod;