type Props = {
  profile: { name: string, description: string, pfp: string }
}

export function ProfileCard({ profile }: Props) {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <img src={profile.pfp} alt={`${profile.name} profile picture`} className="rounded-full w-40 h-40 aspect-square object-cover self-center md:self-auto" />
      <div className="flex flex-col md:ml-8">
        <h2 className="text-center md:text-left mt-4 md:mt-0">{profile.name}</h2>
        <p className="py-2">{profile.description}</p>
      </div>
    </div>
  )
}