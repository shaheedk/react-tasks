import { Outlet, useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>user1</h2>
      <h2>user2</h2>
      <h2>user3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
}
