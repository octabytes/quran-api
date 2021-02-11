const welcomeEveryone = async (req, res, next) => {
  try {

    return res.status(200).json({
      message: "Welcome Everyone!"
    });
    
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
};

module.exports = welcomeEveryone;
