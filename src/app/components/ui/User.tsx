export type UserType = {
    id: string;
    name: string;
    username: string;
    email: string;
    website: string;
}

function User({ id, name, username, email, website}: UserType) {
    return (
        <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{username}</div>
        <div className="hover:text-blue-500 underline">{email}</div>
        <div>{website}</div>
        </div>
    )
}

export default User;