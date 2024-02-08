import { useQuery } from "@tanstack/react-query";
const useUserData = () => {
  const usersData = useQuery(["users"], () => fetch("/api/users"));
  return usersData;
};

export default useUserData;
