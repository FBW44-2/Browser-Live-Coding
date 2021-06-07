exports.getHome = (req, res) => {
  res.render("index", data);
};

exports.getLogin = (req, res) => {
  if (data.isLogin) {
    res.redirect("/profile");
  } else {
    res.render("login", data);
  }
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  if (username === "nrcool" && password === "12345") {
    data.isLogin = true;
    data.user = username;
    //redirecting to profile page
    res.redirect("/profile");
  } else {
    data.isError = true;
    data.errorMessage = "email or password is incorrect";
    res.redirect("/login");
  }
};

exports.getSignup = (req, res) => {
  res.render("signup", data);
};

exports.getProfile = (req, res) => {
  if (data.isLogin) {
    res.render("profile", data);
  } else {
    res.redirect("/");
  }
};
