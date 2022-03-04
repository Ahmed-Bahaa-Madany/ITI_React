import React, { useEffect, useState } from "react";
import {
    useHistory,
    useLocation,
    useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
    axios
        .get("https://fakestoreapi.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    }, []);
    return (
        <>
        <div>
            users
            <ul>
            {users.map((user) => {
                return (
                <Link to={`/movie-details/${user.id}`} key={user.email}>
                    <li>{user.email}</li>
                </Link>
                )
            })}
            </ul>
        </div>
        </>
    );
}
