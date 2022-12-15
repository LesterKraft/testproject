import { useRouter } from "next/router";
import CardAnswer from "../../components/CardAnswer";
import CardQuestion from "../../components/CardQuestion";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <CardQuestion />
      <CardAnswer />
    </>
  );
}
