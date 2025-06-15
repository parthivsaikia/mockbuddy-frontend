import { Form } from "react-router";

export default function UserSignupPage() {
  return (
    <div>
      <Form>
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
