import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-brand/20 bg-ink py-9 text-sm text-mute lg:ml-[236px]">
      <div className="mx-auto flex max-w-[1080px] flex-wrap justify-between gap-4 px-5 sm:px-8">
        <div><strong className="text-brand">{profile.name}</strong> · {profile.headline}<br />© {new Date().getFullYear()} All rights reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-brand" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-brand" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-brand" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
