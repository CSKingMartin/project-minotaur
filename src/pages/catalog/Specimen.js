import { useRouter } from 'next/router';
import Specimen from '@organisms/SpecimenTwo';

const SpecimenPage = () => {
  const router = useRouter();

  return (
    <Specimen query={router.query.component} />
  );
};

export default SpecimenPage;
