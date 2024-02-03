import { useEffect, useState } from "react";
import { UsersProps } from "./types/UsersProps";

/**
 * This is a functional component that renders a list of users with buttons to select each user.
 *
 * @param {{ onCurrentId: (id: number) => any }} onCurrentId - a function to handle the current user's id
 * @return {JSX.Element} the rendered list of users
 */
const List = ({ onCurrentId }: { onCurrentId: (id: number) => any }) => {
  const [user, setUser] = useState<UsersProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/users.json");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = (id: number) => {
    onCurrentId(id);
  };
  return (
    <>
      {user.map((user) => (
        <li className="item" key={user.id}>
          <button onClick={() => handleClick(user.id)}>{user.name}</button>
        </li>
      ))}
    </>
  );
};

export default List;
