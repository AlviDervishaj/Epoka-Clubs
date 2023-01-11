import { ProfileIcon } from "@icons";

export const NavigationProfileLink = () => {
  return (
  <button className={'navigation-link group'}>
    <ProfileIcon width={24} height={24} className={'navigation-profile-icon'} />
    <p className={'navigaiton-profile-text'}>Profile</p>
  </button>
  )
}
