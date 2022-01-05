import Image from 'next/image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={`Cover Image for ${name}`}
        className="w-12 h-12 rounded-full mr-4"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
