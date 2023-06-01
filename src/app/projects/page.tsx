// projects 폴더 내의 page.tsx 파일의 코드
import { Client } from '@notionhq/client';

async function getData() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log(response);

    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Projects({ projects }) {
  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getData();

  return {
    props: {
      projects: projects,
    },
  };
}
