import { useRouter } from "next/router";

export const getIdFromUrl = () => {
  const router = useRouter();
  const idString = router.query.id;
  const id = typeof idString === "string" ? parseInt(idString) : -1;
  return id;
};
