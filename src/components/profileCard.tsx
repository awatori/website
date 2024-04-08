type Props = {
  profile: { name: string, description: string, pfp: string }
}

export function ProfileCard({ profile }: Props) {
  return (
    <div className="w-full flex">
      <img src={profile.pfp} alt={`${profile.name} profile picture`} className="rounded-full w-40 h-40 aspect-square object-cover" />
      <div className="flex flex-col ml-8">
        <h2>{profile.name}</h2>
        <p className="py-2">{profile.description}</p>
      </div>
    </div>
  )
}