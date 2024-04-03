type Props = {
  profile: { name: string, description: string, pfp: string }
}

export function ProfileCard({ profile }: Props) {
  return (
    <div className="w-1/3 flex flex-col items-center">
      <img src={profile.pfp} alt={`${profile.name} profile picture`} className="rounded-full w-2/3" />
      <h2 className="mt-6">{profile.name}</h2>
      <p className="py-4 px-[8%]">{profile.description}</p>
    </div>
  )
}