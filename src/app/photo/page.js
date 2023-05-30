import Link from "next/link";

const animal = ['cat', 'dog', 'rabbit'];

const PhotoHeader = <h1>Hello, photo Page!</h1>;

export default function photo() {
  return (
    <div>
      {PhotoHeader}
      <ul>
        {animal.map((name) => {
          return (
            <li key={name}>
              <Link href={`/photo/${name}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

