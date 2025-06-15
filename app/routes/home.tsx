import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mockbuddy" },
    { name: "description", content: "Welcome to MockBuddy!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to Mockbuddy</h1>
      <div className="cards">
        <div className="user-card">
          <h2>Signup as User</h2>
          <Link to={`/user-signup`}>Signup</Link>
        </div>
        <div className="interviewer-card">
          <h2>Signup as Interviewer</h2>
          <Link to={`/interviewer-signup`}>Signup</Link>
        </div>
      </div>
    </div>
  );
}
