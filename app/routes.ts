import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/user-signup", "routes/user-signup.tsx"),
  route("/user-login", "routes/user-login.tsx"),
] satisfies RouteConfig;
