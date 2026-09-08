import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const MountainIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 20h18L14 7l-4 7-3-4-4 10z" />
    <path d="M14 7l-2 3.5 2 1.5 2-1.5z" />
  </svg>
);

export const BedIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v3" />
  </svg>
);

export const FoodClocheIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 4V2" />
    <path d="M10 2h4" />
    <path d="M3 18h18" />
    <path d="M4 18a8 8 0 0 1 16 0" />
  </svg>
);

export const GroupIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const ChefHatIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 13.8a4.5 4.5 0 1 1 2-8.5 5 5 0 0 1 8 0 4.5 4.5 0 1 1 2 8.5" />
    <path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
    <line x1="6" y1="18" x2="18" y2="18" />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = "", size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

/* Room Amenities */
export const FanIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V3a2 2 0 0 1 2-2 4 4 0 0 1 4 4c0 2-2 3-6 4" />
    <path d="M15 12h6a2 2 0 0 1 2 2 4 4 0 0 1-4 4c-2 0-3-2-4-6" />
    <path d="M12 15v6a2 2 0 0 1-2 2 4 4 0 0 1-4-4c0-2 2-3 6-4" />
    <path d="M9 12H3a2 2 0 0 1-2-2 4 4 0 0 1 4-4c2 0 3 2 4 6" />
  </svg>
);

export const TVIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="13" rx="2" />
    <polyline points="17 2 12 7 7 2" />
  </svg>
);

export const GeyserIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v4" />
    <path d="M8 3v3" />
    <path d="M16 3v3" />
    <rect x="5" y="8" width="14" height="13" rx="3" />
    <circle cx="12" cy="15" r="2" />
  </svg>
);

export const WaterIcon: React.FC<IconProps> = ({ className = "", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

/* Contacts & General */
export const MapPinIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.26-1.92 1.33-.52.07-1.19.1-3.41-.78-1.93-.77-3.21-2.7-3.3-2.83-.1-.13-.78-1.04-.78-1.98 0-.94.49-1.4 67-1.59.18-.19.39-.24.52-.24.13 0 .26 0 .37.01.12.01.27-.05.42.32.16.37.53 1.3.58 1.39.05.1.08.21.02.34-.07.13-.1.21-.2.33-.1.12-.21.27-.3.36-.1.1-.21.21-.09.42.12.21.53.88 1.15 1.43.79.71 1.47.93 1.68 1.03.21.1.34.09.46-.05.13-.14.54-.63.69-.85.15-.21.3-.18.51-.1.21.08 1.34.63 1.57.75.23.11.38.17.44.27.06.1.06.58-.18 1.26z"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
