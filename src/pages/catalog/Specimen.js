import { useRouter } from 'next/router';
import Specimen from '@organisms/SpecimenTwo';

const SpecimenPage = () => {
  const router = useRouter();

  console.log(router.query.component);

  return (
    <Specimen query={router.query.component} />
  );
};


export default SpecimenPage;
