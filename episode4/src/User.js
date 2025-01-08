function User(props) {
    const { name, age } = props;
    return <h1>{name}: {age}</h1>;
}

export default User;