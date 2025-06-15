import { Form } from "react-router";
import axios from "axios";
import type { Route } from "./+types/user-signup";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const userCreateData = Object.fromEntries(formData);
  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/auth/users/users/signup",
    userCreateData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
}

export default function UserSignupPage() {
  return (
    <div>
      <Form method="post">
        <div>
          <label>Full Name</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
}
