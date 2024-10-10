const express = require("express")

const app = express()

PORT = process.env.PORT || 3000;
const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.get("/", async (req, res) => {

    console.log("ici");
    
    const {lat, lng, category, radius}= req

    const response = await fetch(
        BASE_URL + "/textsearch/json?query="+ category + 
        "&location="+lat+","+lng+
        '&radius='+radius+
        "&key=" + GOOGLE_API_KEY,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
    );

    console.log(response);
    

    return res.json(response)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })