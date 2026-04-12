import React, { createContext, useContext } from 'react';
import { ProfileData, getProfile, Profile } from '../data/profiles';
import { ACTIVE_PROFILE } from '../config';

interface ProfileContextType {
  profile: ProfileData;
  profileType: Profile;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const profileType: Profile = ACTIVE_PROFILE;
  const profile = getProfile(profileType);

  return (
    <ProfileContext.Provider value={{ profile, profileType }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
}
