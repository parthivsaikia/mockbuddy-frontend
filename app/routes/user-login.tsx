import { Form } from "react-router";
import type { Route } from "./+types/user-login";
import axios from "axios";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  formData.append("grant_type", "password");

  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/auth/users/users/login",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(response.data);
}
export default function UserLoginPage() {
  return (
    <div>
      <Form method="post">
        <div>
          <label htmlFor="username">Email</label>
          <input type="email" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}
