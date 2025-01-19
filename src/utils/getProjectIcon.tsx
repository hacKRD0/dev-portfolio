import { FaGithub, FaWordpress } from 'react-icons/fa';
import { TbFaceId, TbSquareRoundedLetterKFilled } from 'react-icons/tb';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';
import { FiBarChart } from 'react-icons/fi';

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'cloudface':
      return <TbFaceId />;
    case 'lambdavision':
      return <MdOutlinePermIdentity />;
    case 'buildsmartdb':
      return <FaRegBuilding />;
    case 'movieflex':
      return <BiCameraMovie />;
    case 'stockcentral':
      return <AiOutlineStock />;
    case 'personal-portfolio':
      return <TbSquareRoundedLetterKFilled />;
    case 'user-access-plugin':
      return <FaWordpress />;
    case 'stocksentimentai':
      return <FiBarChart />;
    default:
      return <FaGithub />;
  }
};

export default getProjectIcon;
