import Image from 'next/image';

const defaultImg = '/assets/blog/dynamic-routing/cover.jpg';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture || defaultImg}
        alt={`Cover Image for ${name}`}
        className="w-12 h-12 rounded-full mr-4"
        layout="responsive"
        width={24}
        height={24}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
