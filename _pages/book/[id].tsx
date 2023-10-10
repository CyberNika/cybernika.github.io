import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const BookOverview: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Book {id}</div>;
};

export default BookOverview;
