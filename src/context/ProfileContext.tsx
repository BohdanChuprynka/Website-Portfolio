import React, { createContext, useContext } from 'react';
import { ProfileData, getProfile, Profile } from '../data/profiles';

interface ProfileContextType {
  profile: ProfileData;
  profileType: Profile;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  // Read from REACT_APP_PROFILE env var, default to 'ml'
  const profileType: Profile = (process.env.REACT_APP_PROFILE as Profile) || 'ml';
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
