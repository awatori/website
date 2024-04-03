type Props = {
  profile: { name: string, description: string, pfp: string }
}

export function ProfileCard({ profile }: Props) {
  return (
    <div className="w-1/3 px-2 flex flex-col items-center">
      <img src={profile.pfp} alt={`${profile.name} profile picture`} className="rounded-full w-2/3" />
      <h2 className="mt-6">{profile.name}</h2>
      <p className="px-10 py-4">{profile.description}</p>
    </div>
  )
}