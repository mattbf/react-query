"use client";

import { useQuery } from "@tanstack/react-query";

const useUserData = (userId: string) => {
  const usersQueryData = useQuery({ queryKey: ["issues"], queryFn: () => fetch(`/api/users/${userId}`).then((res) => res.json()) });

  return usersQueryData;
};

export default useUserData;
