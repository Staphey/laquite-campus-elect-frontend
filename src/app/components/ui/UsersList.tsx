import User, { UserType } from "./User";

async function UsersList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: UserType[] = await response.json();

  return (
    <div>
      {users.map((user) => {
        return (
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
            website={user.website}
          ></User>
        );
      })}
    </div>
  );
}

export default UsersList;
