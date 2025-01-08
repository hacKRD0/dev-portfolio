import { FaGithub } from 'react-icons/fa';
import { TbFaceId, TbSquareRoundedLetterKFilled } from 'react-icons/tb';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'proj-1':
      return <TbFaceId />;
    case 'proj-2':
      return <MdOutlinePermIdentity />;
    case 'proj-3':
      return <FaRegBuilding />;
    case 'proj-4':
      return <BiCameraMovie />;
    case 'proj-5':
      return <AiOutlineStock />;
    case 'proj-6':
      return <TbSquareRoundedLetterKFilled />;
    default:
      return <FaGithub />;
  }
};

export default getProjectIcon;
