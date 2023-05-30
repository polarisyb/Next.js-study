import Link from "next/link";

const dashboardHeader = <h1>Hello, dashboard!</h1>

const pageList = ['/', 'photo'];

export default function Page() {
  return (
    <div>
      {dashboardHeader}
      <ul>
        {pageList.map((page)=>{
          return (
            <li key = {page}>
              <Link href={`${page}`}>{page}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};