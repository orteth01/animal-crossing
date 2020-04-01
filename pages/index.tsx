import React from 'react';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/6PQrdBsrZVE"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </Layout>
  );
}
