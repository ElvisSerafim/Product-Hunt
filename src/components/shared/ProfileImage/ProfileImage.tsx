import Image from "next/image";

const ProfileImage: React.FC = () => {
  return (
    <div className="flex flex-row relative items-center bg-white  w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
      <Image
        fill
        sizes="(max-width: 768px) 30px, 50px"
        className="object-cover rounded-full"
        alt="User profile image"
        loading="lazy"
        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
      />
    </div>
  );
};

export default ProfileImage;
