// it is for dynamic routing. as it is named as [name] it will be available as params.name . so whatever passed in the url after repos/ will be available as params.name.
// if the folder name is [slug] it will be available as params.slug
import Repo from '@/app/componets/Repo';
import RepoDirs from '@/app/componets/RepoDirs';
import Link from 'next/link';
import { Suspense } from 'react';

//note: dynamic metadata for each repo
export async function generateMetadata({ params }) {

  return {
    title: params.name,
    description: `This is the ${params.name} repository`,
  };
}

const RepoPage = ({ params }) => {
  const { name } = params;
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;

// generateStaticParams is used to generate the dynamic routes for the pages. it will be called at build time.
export async function generateStaticParams() {
  const res = await fetch('https://api.github.com/users/bradtraversy/repos');
  const repos = await res.json();

  return repos?.map((repo) => ({
    params: {
      name: repo?.name,
    },
  }));
}