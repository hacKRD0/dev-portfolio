import { FaGithub, FaRegBuilding, FaStethoscope, FaUsers, FaUserShield, FaWordpress } from 'react-icons/fa';
import { TbFaceId, TbSquareRoundedLetterKFilled } from 'react-icons/tb';
import { MdGTranslate, MdMonitorHeart, MdOutlinePermIdentity } from 'react-icons/md';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';
import { FiBarChart } from 'react-icons/fi';
import { GiClothes } from 'react-icons/gi';

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
    case 'pollyglot':
      return <MdGTranslate />;
    case 'disease-diagnosis':
      return <FaStethoscope />;
    case 'fashion-finder':
      return <GiClothes />;
    case 'sreai':
      return <MdMonitorHeart />;
    case 'trikona':
    case 'trikona-user-management':
      return <FaUserShield />;
    case 'trikona-directory-service':
      return <FaUsers />;
    case 'disease-diagnosis-finetuning':
      return <FaStethoscope />;
    default:
      return <FaGithub />;
  }
};

export default getProjectIcon;
