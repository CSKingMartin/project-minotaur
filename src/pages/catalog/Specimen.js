import { useRouter } from 'next/router';
import Specimen from '@organisms/Specimen';

const SpecimenPage = () => {
  const router = useRouter();

  return (
    <Specimen query={router.query.component} />
  );
};

export default SpecimenPage;
