import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const details = {
  name: 'Madhav Polawar',
  bio: 'Frontend Developer',
  contact: {
    email: 'madhavpolawar2012@gmail.com',
    github: 'https://github.com/xexter',
    linkedin: 'https://www.linkedin.com/in/madhav-polawar-5b1891ba/',
  },
};

const Contact = () => {
  return (
    <div className='container-max min-h-screen'>
      <h1 className='text-2xl my-4 font-bold'>Contact</h1>
      <div>
        <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
        <p className='text-lg'>{details.bio}</p>

        <div className='my-4 space-y-2'>
          <h3 className='text-lg font-semibold'>Connect with me</h3>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Gmail: </span>
            <a href={details.contact.email} className='flex items-center gap-1'>
              {details.contact.email}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Github: </span>{' '}
            <a
              href={details.contact.github}
              className='flex items-center gap-1'
            >
              {details.contact.github}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
          <p className='flex flex-wrap items-center gap-2'>
            <span className='font-semibold'>Linkedin: </span>{' '}
            <a
              href={details.contact.linkedin}
              className='flex items-center gap-1'
            >
              {details.contact.linkedin}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;