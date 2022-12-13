import { useRouter } from "next/router";
import CardQuestion from "../../components/CardQuestion";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <CardQuestion />
    </>
  );
}
