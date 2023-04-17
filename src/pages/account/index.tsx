import { useRouter } from "next/router";
// import dore from "../public/doremon.jpg";
// import Image from "next/image";
export default function Home() {
  const router = useRouter();
  const { profile } = router.query;
  console.log(router.query);
  return (
    <>
      <h1>King of the north: {profile}</h1>
      <img src="images/doremon.jpg" alt="xx"/>
      <img src={`${process.env.PUBLIC_URL}/doremon.jpg`} />
    </>
  );
}
