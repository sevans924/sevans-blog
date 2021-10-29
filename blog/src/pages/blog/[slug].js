import Layout from '../../components/Layout';
import SingleResource from '../../components/SingleResource';
import {
  getAllResourceSlugs,
  getResourceData,
} from '../../utils/fetch-resources';

const Resource = ({ resourceData=[] }) => {
  return (
    <Layout>
        <SingleResource resource={resourceData} />
    </Layout>
  );
};

// add getStaticPaths
// export const getStaticPaths = ({ locales }) => {
//   const paths = getAllResourceSlugs(locales);

//   return {
//     paths,
//     fallback: true,
//   };
// };

// // add getStaticProps
// export const getStaticProps = async ({ params, locale }) => {
//   const resourceData = await getResourceData(params.slug, locale);

//   return {
//     props: {
//       resourceData,
//     },
//   };
// };

export default Resource;
