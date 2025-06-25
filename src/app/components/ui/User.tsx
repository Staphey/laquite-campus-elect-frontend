export type UserType = {
    id: string;
    name: string;
    username: string;
    email: string;
    website: string;
    department: string;
    role: string;
}

function User({ id, name, username, email, website}: UserType) {
    return (
        <div>
        <div>{name}</div>
        </div>
    )
}

export default User;