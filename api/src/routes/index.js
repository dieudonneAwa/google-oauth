import passport from "passport";
import AuthController from "../controllers/AuthController";

const routes = (app) => {
  app.get("/", (req, res) =>
    res.send("Welcome to my Google Oauth express server")
  );

  app.post(
    "/oauth/google",
    passport.authenticate("google-token", { session: false }),
    AuthController.googleLogin
  );
};

export default routes;
