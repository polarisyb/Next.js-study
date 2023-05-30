import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/dashboard'>
          dashboard
        </Link>
      </li>
      <li>
        <Link href='/photo'>
          photo
        </Link>
      </li>
    </ul>
  );
};