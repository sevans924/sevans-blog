
import Layout from '../../components/Layout';
import ResourceList from '../../components/ResourceList';
//import { getResourceList } from '../../utils/fetch-resources';


const Resources = ({ resourceList=[] }) => {

  return (
    <Layout>
        <ResourceList resources={resourceList} />
    </Layout>
  );
};

// export const getStaticProps = ({ locale }) => {
//   const resourceList = getResourceList(locale);

//   return {
//     props: {
//       resourceList,
//     },
//   };
// };

export default Resources;
