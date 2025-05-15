const express = require("express");
const mongo = require("../DataBase/mongoDb");
const router = express.Router();
const shortid = require("shortid");
const Link = require("../Model/model");
const { log } = require("console");

// import router from express.router 

mongo();

// Home route to generate a random shortid for testing
router.get("/", (req, res) => {
  res.send("welcome to my website");
});

// Helper function to generate a unique shortid
const generateUniqueShortId = async () => {
  let id;
  let exists = true;
  
  // Loop to ensure the generated shortid is unique
  while (exists) {
    id = shortid.generate();
    const existingLink = await Link.findOne({ shortid: id });  // Check if shortid exists
    if (!existingLink) {
      exists = false;  // Exit the loop if shortid is unique
    }
  }
  
  return id;
};

// Route to shorten a link and store it in the database
router.post("/url", async (req, res) => {
  const { link } = req.body;
  console.log(link);
  

  // Validate the link input
  if (!link) {
    console.log("Link is required");
    
    return res.status(400).send("Link is required");
  }

  try {
    // Generate a unique shortid
    const uniqueShortId = await generateUniqueShortId();

    // Construct the data object
    const data = {
      shortid: uniqueShortId,
      redirectUrl: link,
    };

    // Create and save the new link to the database
    const newLink = new Link(data);
    await newLink.save();

    // Send back a success response with the shortened URL
    res.status(201).json({
      message: "Link saved successfully",
      shortid: `http://localhost:4000/${newLink.shortid}`,
      originalUrl: newLink.redirectUrl,
    });
  } catch (error) {
    console.error("Error saving link:", error);
    res.status(500).json({ message: "Failed to save link", error });
  }
});

router.get("/:shortid", async (req, res) => {
    const { shortid } = req.params;
    try {
      // Find the link by shortid in the database
      const link = await Link.findOne({ shortid });
        
      if (!link) {
        return res.status(404).send("Link not found");
      }
  
      // Redirect to the original URL
      res.redirect(link.redirectUrl);
    } catch (error) {
      console.error("Error fetching link:", error);
      res.status(500).send("Error occurred while redirecting");
    }
  });
  

module.exports = router;
