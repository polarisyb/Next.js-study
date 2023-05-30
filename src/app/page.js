import Link from "next/link";

const HomeHeader = <h1>Hello, Home Page!</h1>

export default function Page() {
  return (
    <div>
      {HomeHeader}
      <ul>
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
    </div>
  );
};
