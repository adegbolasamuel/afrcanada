import React from 'react';
import './ExpoDetailsSection.css';
 
// Placeholder icon components for demonstration.
// In a real project, you'd replace these with actual SVG components or image imports.
const TabExhibitionIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.6666V2.66665C4 2.31302 4.14048 1.97389 4.39052 1.72384C4.64057 1.47379 4.97971 1.33331 5.33333 1.33331H10.6667C11.0203 1.33331 11.3594 1.47379 11.6095 1.72384C11.8595 1.97389 12 2.31302 12 2.66665V14.6666H4Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99992 8H2.66659C2.31296 8 1.97382 8.14048 1.72378 8.39052C1.47373 8.64057 1.33325 8.97971 1.33325 9.33333V13.3333C1.33325 13.687 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6667 2.66659 14.6667H3.99992" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6H13.3333C13.687 6 14.0261 6.14048 14.2761 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667H12" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 4H9.33341" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 6.66669H9.33341" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 9.33331H9.33341" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66675 12H9.33341" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Building
const TabConferenceIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33323 5.06732L3.33723 10.5273C3.2432 10.6558 3.19824 10.8136 3.21047 10.9723C3.22269 11.131 3.29131 11.2801 3.4039 11.3927L3.94856 11.938C4.0628 12.0521 4.21456 12.1209 4.37567 12.1315C4.53678 12.1422 4.69628 12.094 4.82456 11.996L10.0599 7.99999" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 14.116C10.3333 13.6667 9.58128 13.3334 8.66661 13.3334C7.29461 13.3334 6.04794 14.904 4.66661 14.6667C3.28528 14.4294 2.81661 12.4207 3.66661 11.6667" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6666 7.99998C12.5075 7.99998 13.9999 6.5076 13.9999 4.66665C13.9999 2.8257 12.5075 1.33331 10.6666 1.33331C8.82564 1.33331 7.33325 2.8257 7.33325 4.66665C7.33325 6.5076 8.82564 7.99998 10.6666 7.99998Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Microphone
const TabB2BIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6666 14V12.6667C10.6666 11.9594 10.3856 11.2811 9.88554 10.781C9.38544 10.281 8.70716 10 7.99992 10H3.99992C3.29267 10 2.6144 10.281 2.1143 10.781C1.6142 11.2811 1.33325 11.9594 1.33325 12.6667V14" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99992 7.33333C7.47268 7.33333 8.66659 6.13943 8.66659 4.66667C8.66659 3.19391 7.47268 2 5.99992 2C4.52716 2 3.33325 3.19391 3.33325 4.66667C3.33325 6.13943 4.52716 7.33333 5.99992 7.33333Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 14V12.6667C14.6663 12.0758 14.4697 11.5019 14.1077 11.0349C13.7457 10.5679 13.2388 10.2344 12.6667 10.0867" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 2.08667C11.2404 2.23354 11.7488 2.56714 12.1118 3.03488C12.4749 3.50262 12.672 4.07789 12.672 4.67C12.672 5.26212 12.4749 5.83739 12.1118 6.30513C11.7488 6.77287 11.2404 7.10647 10.6667 7.25334" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Handshake
const TabStartupIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00008 11C2.00008 11.84 1.66675 14.3333 1.66675 14.3333C1.66675 14.3333 4.16008 14 5.00008 13C5.47341 12.44 5.46675 11.58 4.94008 11.06C4.68095 10.8126 4.33961 10.6697 3.98157 10.6587C3.62352 10.6476 3.274 10.7691 3.00008 11Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10L6 8.00002C6.35476 7.07964 6.80147 6.1974 7.33333 5.36669C8.11012 4.12468 9.19175 3.10206 10.4753 2.39608C11.7589 1.69011 13.2018 1.32427 14.6667 1.33336C14.6667 3.14669 14.1467 6.33336 10.6667 8.66669C9.82459 9.19917 8.93123 9.64585 8 10Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00008 7.99997H2.66675C2.66675 7.99997 3.03341 5.97997 4.00008 5.33331C5.08008 4.61331 7.33341 5.33331 7.33341 5.33331" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10V13.3334C8 13.3334 10.02 12.9667 10.6667 12C11.3867 10.92 10.6667 8.66669 10.6667 8.66669" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Lightbulb
const TabCulturalIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00008 4.66667C9.18418 4.66667 9.33341 4.51743 9.33341 4.33333C9.33341 4.14924 9.18418 4 9.00008 4C8.81599 4 8.66675 4.14924 8.66675 4.33333C8.66675 4.51743 8.81599 4.66667 9.00008 4.66667Z" fill="#65758B" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6666 7.33335C11.8507 7.33335 11.9999 7.18412 11.9999 7.00002C11.9999 6.81593 11.8507 6.66669 11.6666 6.66669C11.4825 6.66669 11.3333 6.81593 11.3333 7.00002C11.3333 7.18412 11.4825 7.33335 11.6666 7.33335Z" fill="#65758B" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.66659 5.33335C5.85068 5.33335 5.99992 5.18412 5.99992 5.00002C5.99992 4.81593 5.85068 4.66669 5.66659 4.66669C5.48249 4.66669 5.33325 4.81593 5.33325 5.00002C5.33325 5.18412 5.48249 5.33335 5.66659 5.33335Z" fill="#65758B" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33333 8.66667C4.51743 8.66667 4.66667 8.51743 4.66667 8.33333C4.66667 8.14924 4.51743 8 4.33333 8C4.14924 8 4 8.14924 4 8.33333C4 8.51743 4.14924 8.66667 4.33333 8.66667Z" fill="#65758B" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99992 1.33331C4.33325 1.33331 1.33325 4.33331 1.33325 7.99998C1.33325 11.6666 4.33325 14.6666 7.99992 14.6666C8.61725 14.6666 9.09859 14.1693 9.09859 13.5413C9.09859 13.25 8.97859 12.9846 8.80725 12.7913C8.61392 12.5986 8.51525 12.3566 8.51525 12.0413C8.51272 11.8946 8.53976 11.7489 8.59475 11.6128C8.64974 11.4767 8.73155 11.3531 8.83532 11.2494C8.93909 11.1456 9.06268 11.0638 9.19874 11.0088C9.33479 10.9538 9.48053 10.9268 9.62725 10.9293H10.9579C12.9919 10.9293 14.6613 9.26065 14.6613 7.22665C14.6433 4.00798 11.6406 1.33331 7.99992 1.33331Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Theatre masks
const TabInvestmentIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6666 4.66669L8.99992 10.3334L5.66659 7.00002L1.33325 11.3334" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 4.66669H14.6667V8.66669" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Chart
const TabNetworkingIcon = () => <span className="tab-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.86659 7.53333L1.33325 14.6667L8.46659 12.14" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66675 2H2.67341" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 5.33331H14.6734" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 1.33331H10.0067" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 13.3333H14.6734" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6666 1.33331L13.1733 1.83331C12.7482 1.97491 12.3855 2.25974 12.1471 2.63913C11.9088 3.01852 11.8096 3.46891 11.8666 3.91331C11.9333 4.48665 11.4866 4.99998 10.8999 4.99998H10.6466C10.0733 4.99998 9.57992 5.39998 9.47325 5.95998L9.33325 6.66665" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6666 8.66666L14.1199 8.44666C13.5466 8.21999 12.9066 8.57999 12.7999 9.18666C12.7266 9.65333 12.3199 9.99999 11.8466 9.99999H11.3333" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.33333 1.33331L7.55333 1.87998C7.78 2.45331 7.42 3.09331 6.81333 3.19998C6.34667 3.26665 6 3.67998 6 4.15331V4.66665" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.33334 8.66666C8.62001 9.95332 9.22001 11.4467 8.66668 12C8.11334 12.5533 6.62001 11.9533 5.33334 10.6667C4.04668 9.37999 3.44668 7.88666 4.00001 7.33332C4.55334 6.77999 6.04668 7.37999 7.33334 8.66666Z" stroke="#65758B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Globe/Network

const CardExhibitorIcon = () => <span className="card-top-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V22H6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Building/Factory
const CardVisitorIcon = () => <span className="card-top-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>; // Group of people

const ExpoDetailsSection = () => {
  return (
    <section className="expo-details-section">
      <div className="section-content-wrapper">

        {/* --- A Complete Business Ecosystem --- */}
        <div className="business-ecosystem-intro">
          <p className="small-heading">EXPO COMPONENTS</p>
          <h2 className="main-heading">A Complete Business Ecosystem</h2>
          <p className="sub-heading">Everything you need for successful deal-making under one roof</p>
        </div>

        {/* --- Expo Component Tabs --- */}
        <div className="expo-components-tabs">
          <div className="tab-item active"><TabExhibitionIcon /> Exhibition Halls</div>
          <div className="tab-item"><TabConferenceIcon /> Conference & Trade Dialogues</div>
          <div className="tab-item"><TabB2BIcon /> B2B Matchmaking Lounge</div>
          <div className="tab-item"><TabStartupIcon /> Startup Spotlight</div>
          <div className="tab-item"><TabCulturalIcon /> Cultural Experience Zones</div>
          <div className="tab-item"><TabInvestmentIcon /> Investment Forums</div>
          <div className="tab-item"><TabNetworkingIcon /> Networking Events</div>
        </div>

        {/* --- Exhibition Halls Content (Expanded Active Tab Content) --- */}
        <div className="exhibition-halls-panel">
          <div className="panel-left">
           <div className="panel-heading-group">
              <TabExhibitionIcon />
  <span className="panel-icon">
   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="8" fill="#E2473C" fill-opacity="0.1"/>
<path d="M18 34V16C18 15.4696 18.2107 14.9609 18.5858 14.5858C18.9609 14.2107 19.4696 14 20 14H28C28.5304 14 29.0391 14.2107 29.4142 14.5858C29.7893 14.9609 30 15.4696 30 16V34H18Z" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 24H16C15.4696 24 14.9609 24.2107 14.5858 24.5858C14.2107 24.9609 14 25.4696 14 26V32C14 32.5304 14.2107 33.0391 14.5858 33.4142C14.9609 33.7893 15.4696 34 16 34H18" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 21H32C32.5304 21 33.0391 21.2107 33.4142 21.5858C33.7893 21.9609 34 22.4696 34 23V32C34 32.5304 33.7893 33.0391 33.4142 33.4142C33.0391 33.7893 32.5304 34 32 34H30" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 18H26" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22H26" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 26H26" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 30H26" stroke="#E2473C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </span>

  <h3 className="panel-title">Exhibition Halls</h3>
</div>
            <p className="panel-description">
              World-class exhibition spaces featuring country pavilions, sector zones,
              and innovation alley.
            </p>
            <button className="btn btn-red-outline">Learn More About Exhibiting <span>&rarr;</span></button>
          </div>

          <div className="panel-right">
            <ul>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Made in Africa Pavilion - Country pavilions representing African nations</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Made in Canada/Host Country Showcase</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Sector Zones: Fashion, food, beauty, technology, AI, manufacturing</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Innovation Alley: Startups and emerging businesses</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Demo Stages: Live product demonstrations throughout the day</li>
            </ul>
          </div>
        </div>

        {/* --- Join Thousands of Trade Professionals --- */}
        <div className="who-should-attend-intro">
          <p className="small-heading">WHO SHOULD ATTEND</p>
          <h2 className="main-heading">Join Thousands of Trade Professionals</h2>
        </div>

        {/* --- Exhibitors & Visitors Cards --- */}
        <div className="attendee-cards-grid">
          {/* Exhibitors Card (Red Theme) */}
          <div className="attendee-card-exhibitor-theme">
            <div className="card-top-header">
              <CardExhibitorIcon />
              <h3>Exhibitors</h3>
            </div>
            <p className="card-subtext">Showcase your products to the world</p>

            <h4 className="card-list-title">Who Should Exhibit:</h4>
            <ul>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Canadian Manufacturers & Producers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> African Exporters</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Cooperatives & Associations</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Artisans & Craftspeople</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Service Providers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Government Trade Agencies</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Technology Companies</li>
            </ul>

            <h4 className="card-list-title">Exhibitor Benefits:</h4>
            <ul>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Direct access to qualified buyers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Lead generation and sales opportunities</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Brand visibility and media exposure</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Networking with industry leaders</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Government delegation meetings</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#E2473C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Cultural showcase opportunities</li>
            </ul>

            <button className="btn btn-primary-card">Register as Exhibitor <span>&rarr;</span></button>
          </div>

          {/* Visitors Card (Blue/Dark Theme) */}
          <div className="attendee-card visitor-theme">
            <div className="card-top-header">
              <CardVisitorIcon />
              <h3>Visitors</h3>
            </div>
            <p className="card-subtext">Discover opportunities and build partnerships</p>

            <h4 className="card-list-title">Who Should Visit:</h4>
            <ul>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> International Buyers & Importers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Distributors & Retailers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Investors & Investment Funds</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Corporate Procurement</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Government Officials & Diplomats</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Corporate Procurement</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Trade Development Agencies</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Media & Journalists</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Researchers & Academics</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#21C45D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Diaspora Entrepreneurs</li>
            </ul>

            <h4 className="card-list-title">Visitor Benefits:</h4>
            <ul>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Free trade visitor registration</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Access to 500+ exhibitors under one roof</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Pre-arranged B2B meetings</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Conference sessions and workshops</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Networking with decision-makers</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Market intelligence and insights</li>
              <li><span className="check-bullet-green"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33329L8 9.33329L14.6667 2.66663" stroke="#FBBD23" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Cultural experiences</li>
            </ul>

            <button className="btn btn-secondary-card">Register as Visitor - FREE <span>&rarr;</span></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpoDetailsSection;