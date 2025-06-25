import StudentsList from "../components/ui/StudentsList";
import UsersList from "../components/ui/UsersList";

function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <h2 className="m-8 font-bold text-4xl">Users List</h2>
      <div>Users list component will be implemented here</div>
      <StudentsList />
    </div>
  );
}

export default Page;
