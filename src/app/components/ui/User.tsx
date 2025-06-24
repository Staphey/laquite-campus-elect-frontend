export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
}

function User({ id, name, username, email, website}: UserType) {
    return (
        <div>
        <div>{id}</div>
        </div>
    )
}

export default User;