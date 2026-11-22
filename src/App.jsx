import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Calendar,
  MapPin,
  Volume2,
  VolumeX,
  X,
  ExternalLink,
  MessageCircle,
  Navigation,
  Phone,
  Flame,
  Music,
  Flower2,
  Star
} from 'lucide-react';

// ============================================================================
// CONSTANTS & VENUE DETAILS (GOLDEN CROWN - BANQUET HALL, ROHINI)
// ============================================================================

const GOLDEN_CROWN_MAPS_URL =
  "https://www.google.com/maps/place/Golden+Crown+-+Banquet+hall+Rohini/@28.7268043,77.1244403,17z/data=!3m1!4b1!4m6!3m5!1s0x390d014700d98b87:0x92d8fecfce15696d!8m2!3d28.7268043!4d77.1244403!16s%2Fg%2F11wv01vjll?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

const GOLDEN_CROWN_EMBED_URL =
  "https://maps.google.com/maps?q=28.7268043,77.1244403&z=16&output=embed";

// Place your audio file in `public/wedding-song.mp3` or paste a direct .mp3 URL here
const CUSTOM_SONG_URL = "/wedding-song.mp3";

const WEDDING_CONFIG = {
  groomName: "Kunal",
  brideName: "Richa",
  groomParents: "Smt. Kavita & Shri Sanjay Azad",
  brideParents: "Smt. Sunita & Shri Ramesh Chand Garg",
  weddingDateDisplay: "Saturday, December 12, 2026",
  weddingDateISO: "2026-12-12T17:00:00+05:30",
  venueName: "Golden Crown - Banquet Hall, Rohini",
  venueAddress: "Near Swarn Jayanti Park (Japanese Park), Sector 12, Rohini, New Delhi, Delhi 110085",
  venuePhone: "+91 93111 89019",
  hashtag: "#KunalKiRicha",
  timings: {
    baraat: "5:00 PM Onwards",
    jaimala: "8:30 PM",
    dinner: "8:00 PM Onwards",
    pheras: "Taaron Ki Chhaon Mein"
  }
};

// ============================================================================
// ORNAMENTAL & ANIMATED INDIAN WEDDING SVG ILLUSTRATIONS
// ============================================================================

const LotusDivider = ({ className = "w-64" }) => (
  <div className={`flex items-center justify-center gap-3 my-4 mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/70 to-[#C5A059]" />
    <svg width="36" height="26" viewBox="0 0 48 34" fill="none">
      <path
        d="M24 3C24 3 17 13 17 21C17 26 20 30 24 32C28 30 31 26 31 21C31 13 24 3 24 3Z"
        fill="#C5A059"
        fillOpacity="0.25"
        stroke="#C5A059"
        strokeWidth="1.4"
      />
      <path
        d="M24 32C16 30 8 24 6 15C4 8 12 7 17 13"
        stroke="#C5A059"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M24 32C32 30 40 24 42 15C44 8 36 7 31 13"
        stroke="#C5A059"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="19" r="2" fill="#9E2A2B" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/70 to-[#C5A059]" />
  </div>
);

const MandalaWatermark = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className={`pointer-events-none select-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="90" stroke="#C5A059" strokeWidth="0.6" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="74" stroke="#C5A059" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="54" stroke="#C5A059" strokeWidth="0.6" />
    <circle cx="100" cy="100" r="32" stroke="#C5A059" strokeWidth="0.8" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 10C106 28 106 40 100 48C94 40 94 28 100 10Z"
          stroke="#C5A059"
          strokeWidth="0.7"
        />
        <path
          d="M100 48C108 60 108 72 100 84C92 72 92 60 100 48Z"
          stroke="#C5A059"
          strokeWidth="0.6"
        />
        <circle cx="100" cy="18" r="1.5" fill="#C5A059" />
      </g>
    ))}
  </svg>
);

const AnimatedMandapHeroIllustration = ({ groomName, brideName }) => (
  <div className="relative w-full max-w-2xl mx-auto my-6 select-none">
    <div className="relative rounded-t-[260px] rounded-b-2xl bg-gradient-to-b from-[#2A1215] via-[#3D161A] to-[#1F0D0F] p-3 sm:p-5 border-2 border-[#C5A059] shadow-[0_25px_70px_rgba(122,28,28,0.28)] overflow-hidden">
      <svg
        viewBox="0 0 600 540"
        className="w-full h-auto block rounded-t-[245px] rounded-b-xl overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mandapGlow" cx="50%" cy="52%" r="55%">
            <stop offset="0%" stopColor="#F5C26B" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#9E2A2B" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1B0A0C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D799" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8E6824" />
          </linearGradient>
          <linearGradient id="crimsonDrape" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8E1B22" />
            <stop offset="100%" stopColor="#4A0B0F" />
          </linearGradient>
          <linearGradient id="lehengaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C82333" />
            <stop offset="60%" stopColor="#8F1622" />
            <stop offset="100%" stopColor="#5C0C14" />
          </linearGradient>
          <linearGradient id="sherwaniGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8EB" />
            <stop offset="100%" stopColor="#E5D2B0" />
          </linearGradient>
        </defs>

        <circle cx="300" cy="290" r="260" fill="url(#mandapGlow)" />

        {[
          { x: 110, y: 140, d: "0s" },
          { x: 165, y: 95, d: "0.7s" },
          { x: 240, y: 75, d: "1.3s" },
          { x: 360, y: 75, d: "0.4s" },
          { x: 435, y: 95, d: "1.1s" },
          { x: 490, y: 140, d: "1.6s" },
          { x: 140, y: 230, d: "0.9s" },
          { x: 460, y: 230, d: "0.2s" },
          { x: 300, y: 115, d: "1.4s" }
        ].map((st, idx) => (
          <g key={idx} className="animate-twinkle" style={{ animationDelay: st.d }}>
            <circle cx={st.x} cy={st.y} r="2.5" fill="#FDE68A" />
            <path
              d={`M${st.x - 6} ${st.y} H${st.x + 6} M${st.x} ${st.y - 6} V${st.y + 6}`}
              stroke="#FDE68A"
              strokeWidth="0.9"
            />
          </g>
        ))}

        <path
          d="M55 510 V230 C55 110 175 30 300 20 C425 30 545 110 545 230 V510"
          stroke="url(#goldArchGrad)"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M72 510 V235 C72 125 185 48 300 38 C415 48 528 125 528 235 V510"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          fill="none"
        />

        <path
          d="M60 190 Q135 225 105 340 Q85 420 95 505 L58 505 Z"
          fill="url(#crimsonDrape)"
          stroke="#C5A059"
          strokeWidth="1.5"
        />
        <path
          d="M540 190 Q465 225 495 340 Q515 420 505 505 L542 505 Z"
          fill="url(#crimsonDrape)"
          stroke="#C5A059"
          strokeWidth="1.5"
        />

        <rect x="82" y="210" width="22" height="295" fill="url(#goldArchGrad)" rx="3" />
        <rect x="496" y="210" width="22" height="295" fill="url(#goldArchGrad)" rx="3" />
        <rect x="74" y="492" width="38" height="16" fill="url(#goldArchGrad)" rx="2" />
        <rect x="488" y="492" width="38" height="16" fill="url(#goldArchGrad)" rx="2" />

        <g className="animate-sway-gentle" style={{ transformOrigin: "300px 60px" }}>
          {[125, 165, 205, 395, 435, 475].map((xPos, i) => (
            <g key={i}>
              <line
                x1={xPos}
                y1="75"
                x2={xPos}
                y2={i % 2 === 0 ? "215" : "185"}
                stroke="#D97706"
                strokeWidth="2"
                strokeDasharray="1 6"
              />
              {[95, 115, 135, 155, 175, 195].map((yPos, j) =>
                yPos <= (i % 2 === 0 ? 205 : 175) ? (
                  <circle
                    key={j}
                    cx={xPos}
                    cy={yPos}
                    r="5.5"
                    fill={j % 2 === 0 ? "#F59E0B" : "#EF4444"}
                    stroke="#FDE68A"
                    strokeWidth="0.8"
                  />
                ) : null
              )}
            </g>
          ))}

          <path
            d="M95 190 Q150 230 205 185 Q252 225 300 180 Q348 225 395 185 Q450 230 505 190"
            stroke="#F59E0B"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="2 11"
            fill="none"
          />
          <path
            d="M95 178 Q150 218 205 173 Q252 213 300 168 Q348 213 395 173 Q450 218 505 178"
            stroke="#EF4444"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1 10"
            fill="none"
          />
        </g>

        <g className="animate-sway-bell" style={{ transformOrigin: "300px 42px" }}>
          <line x1="300" y1="38" x2="300" y2="82" stroke="#F4D799" strokeWidth="2.5" />
          <path
            d="M286 96 C286 82 314 82 314 96 L320 110 H280 L286 96 Z"
            fill="url(#goldArchGrad)"
          />
          <circle cx="300" cy="114" r="4" fill="#FDE68A" />
        </g>

        <g className="animate-couple-float" style={{ transformOrigin: "235px 360px" }}>
          <rect x="218" y="438" width="11" height="50" fill="#F4EFE6" rx="4" />
          <rect x="236" y="438" width="11" height="50" fill="#F4EFE6" rx="4" />
          <path d="M212 490 Q222 482 230 490 L228 496 H210 Z" fill="#C5A059" />
          <path d="M234 490 Q244 482 252 490 L250 496 H232 Z" fill="#C5A059" />

          <path
            d="M206 310 L258 310 L268 442 L198 442 Z"
            fill="url(#sherwaniGrad)"
            stroke="#C5A059"
            strokeWidth="2"
          />
          <line x1="232" y1="312" x2="232" y2="435" stroke="#C5A059" strokeWidth="1.5" />
          {[325, 340, 355, 370, 385].map((by) => (
            <circle key={by} cx="232" cy={by} r="2.2" fill="#9E2A2B" />
          ))}

          <path
            d="M208 312 Q232 345 262 325 L268 395 Q235 375 204 390 Z"
            fill="#9E2A2B"
            stroke="#F4D799"
            strokeWidth="1.5"
          />
          <path
            d="M218 312 Q232 338 246 312"
            stroke="#D97706"
            strokeWidth="2"
            strokeDasharray="2 3"
            fill="none"
          />

          <circle cx="232" cy="282" r="20" fill="#F1C29B" />
          <path d="M225 280 Q228 277 231 280" stroke="#3D2314" strokeWidth="1.5" fill="none" />
          <path d="M237 280 Q240 277 243 280" stroke="#3D2314" strokeWidth="1.5" fill="none" />
          <path d="M228 290 Q235 295 241 289" stroke="#8C2D2D" strokeWidth="1.6" fill="none" strokeLinecap="round" />

          <path
            d="M209 275 C206 252 225 242 246 248 C260 252 260 270 252 277 C240 270 222 268 209 275 Z"
            fill="#A61C28"
            stroke="#F4D799"
            strokeWidth="1.5"
          />
          <path
            d="M214 265 Q234 254 252 266"
            stroke="#F4D799"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="242" cy="254" r="4" fill="#FDE68A" stroke="#9E2A2B" strokeWidth="1" />
          <path d="M242 250 Q252 234 262 238 Q254 248 244 252" fill="#FFF8EB" />

          <path
            d="M248 324 Q272 336 292 320"
            stroke="#FFF8EB"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="294" cy="319" r="5.5" fill="#F1C29B" />
        </g>

        <g
          className="animate-couple-float"
          style={{ transformOrigin: "365px 365px", animationDelay: "0.6s" }}
        >
          <path
            d="M342 348 L390 348 L422 492 L312 492 Z"
            fill="url(#lehengaGrad)"
            stroke="#F4D799"
            strokeWidth="2"
          />
          <path
            d="M316 474 H418 M319 462 H415"
            stroke="#F4D799"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <line x1="350" y1="350" x2="335" y2="488" stroke="#F4D799" strokeWidth="1" strokeOpacity="0.55" />
          <line x1="366" y1="350" x2="366" y2="488" stroke="#F4D799" strokeWidth="1" strokeOpacity="0.55" />
          <line x1="382" y1="350" x2="397" y2="488" stroke="#F4D799" strokeWidth="1" strokeOpacity="0.55" />

          <path
            d="M345 312 L387 312 L390 350 L342 350 Z"
            fill="#9E1B24"
            stroke="#F4D799"
            strokeWidth="1.5"
          />
          <path
            d="M368 252 C398 254 416 298 418 395 L388 380 C392 325 385 280 368 252 Z"
            fill="#F59E0B"
            fillOpacity="0.28"
            stroke="#F4D799"
            strokeWidth="1.5"
          />

          <path
            d="M352 312 Q366 332 380 312"
            stroke="#FDE68A"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M348 314 Q366 344 384 314"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="2 3"
            fill="none"
          />

          <circle cx="366" cy="286" r="19" fill="#F3C6A4" />
          <path
            d="M347 282 C347 262 385 262 385 282 C378 272 354 272 347 282 Z"
            fill="#231412"
          />
          <path
            d="M348 275 Q366 266 384 275"
            stroke="#FDE68A"
            strokeWidth="2.2"
            fill="none"
          />
          <circle cx="366" cy="274" r="3.2" fill="#FDE68A" stroke="#9E2A2B" strokeWidth="0.8" />
          <circle cx="356" cy="289" r="3.5" stroke="#FDE68A" strokeWidth="1.2" fill="none" />
          <circle cx="385" cy="291" r="3.5" fill="#FDE68A" />
          <path d="M354 283 Q357 280 360 283" stroke="#3D2314" strokeWidth="1.4" fill="none" />
          <path d="M366 283 Q369 280 372 283" stroke="#3D2314" strokeWidth="1.4" fill="none" />
          <circle cx="363" cy="278" r="1.3" fill="#9E2A2B" />
          <path d="M357 293 Q363 297 369 293" stroke="#9E2A2B" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          <path
            d="M348 326 Q326 336 308 320"
            stroke="#9E1B24"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M318 326 L314 342 M322 328 L322 344" stroke="#FDE68A" strokeWidth="1.5" />
          <circle cx="314" cy="344" r="3" fill="#FDE68A" />
          <circle cx="322" cy="346" r="3" fill="#FDE68A" />
          <circle cx="306" cy="319" r="5" fill="#F3C6A4" />
        </g>

        <g className="animate-pulse">
          <path
            d="M286 318 Q300 352 314 318"
            stroke="#E11D48"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="2 6"
            fill="none"
          />
          <path
            d="M286 318 Q300 352 314 318"
            stroke="#FEF08A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 8"
            fill="none"
          />
        </g>

        <g transform="translate(300, 478)">
          <polygon points="-32,18 32,18 24,4 -24,4" fill="#B45309" stroke="#FDE68A" strokeWidth="1.2" />
          <polygon points="-24,4 24,4 18,-6 -18,-6" fill="#92400E" stroke="#FDE68A" strokeWidth="1.2" />
          <g className="animate-flame">
            <path
              d="M0 -44 C12 -28 16 -14 0 -4 C-16 -14 -12 -28 0 -44 Z"
              fill="#F59E0B"
              fillOpacity="0.9"
            />
            <path
              d="M-8 -32 C2 -20 8 -10 -4 -4 C-14 -10 -12 -22 -8 -32 Z"
              fill="#EF4444"
              fillOpacity="0.85"
            />
            <path
              d="M0 -28 C6 -18 6 -10 0 -5 C-6 -10 -6 -18 0 -28 Z"
              fill="#FEF08A"
            />
          </g>
        </g>

        {[135, 195, 405, 465].map((dx, i) => (
          <g key={i} transform={`translate(${dx}, 492)`}>
            <path d="M-12 0 Q0 12 12 0 Z" fill="url(#goldArchGrad)" />
            <path
              d="M0 -12 C4 -6 4 -2 0 0 C-4 -2 -4 -6 0 -12 Z"
              fill="#FDE68A"
              className="animate-flame"
            />
            <circle cx="0" cy="-6" r="10" fill="#F59E0B" fillOpacity="0.22" />
          </g>
        ))}

        {[
          { cx: 220, cy: 180, r: 4, c: "#FB7185" },
          { cx: 280, cy: 210, r: 3.5, c: "#FBBF24" },
          { cx: 340, cy: 195, r: 4, c: "#FB7185" },
          { cx: 380, cy: 225, r: 3.5, c: "#FBBF24" },
          { cx: 260, cy: 150, r: 3, c: "#FDE047" },
          { cx: 330, cy: 145, r: 3.5, c: "#F43F5E" }
        ].map((p, idx) => (
          <circle
            key={idx}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.c}
            className="animate-float-petal"
            style={{ animationDelay: `${idx * 0.4}s` }}
          />
        ))}

        <rect x="0" y="506" width="600" height="34" fill="#1A090B" />
        <line x1="0" y1="506" x2="600" y2="506" stroke="#C5A059" strokeWidth="2" />
        <text
          x="300"
          y="528"
          textAnchor="middle"
          fill="#F4D799"
          fontSize="13"
          letterSpacing="4"
          className="font-serif-luxury uppercase"
        >
          ✦ SHUBH VIVAH • {groomName.toUpperCase()} WEDS {brideName.toUpperCase()} ✦
        </text>
      </svg>
    </div>
  </div>
);

const AnimatedRitualScene = ({ type }) => {
  switch (type) {
    case "ganesh":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full">
          <rect width="320" height="240" fill="#2B1013" />
          <circle cx="160" cy="120" r="95" fill="#C5A059" fillOpacity="0.12" />
          <path
            d="M40 220 V110 C40 50 100 20 160 15 C220 20 280 50 280 110 V220"
            stroke="#C5A059"
            strokeWidth="2"
            fill="none"
          />
          <g transform="translate(160, 145)">
            <path
              d="M-28 -10 C-38 15 -26 42 0 45 C26 42 38 15 28 -10 Z"
              fill="#D99B26"
              stroke="#FDE68A"
              strokeWidth="1.5"
            />
            <path
              d="M-8 16 H8 M0 8 V24 M0 8 H8 M0 24 H-8 M-8 16 V8 M8 16 V24"
              stroke="#9E1B24"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <g className="animate-sway-gentle">
              <path d="M-6 -12 C-24 -26 -38 -12 -26 2" fill="#15803D" stroke="#86EFAC" strokeWidth="0.8" />
              <path d="M6 -12 C24 -26 38 -12 26 2" fill="#15803D" stroke="#86EFAC" strokeWidth="0.8" />
            </g>
            <ellipse cx="0" cy="-22" rx="16" ry="20" fill="#78350F" stroke="#FDE68A" strokeWidth="1.2" />
            <path d="M-14 -20 Q0 -14 14 -20" stroke="#DC2626" strokeWidth="2.5" fill="none" />
          </g>
          {[85, 235].map((x, idx) => (
            <g key={idx} transform={`translate(${x}, 185)`}>
              <path d="M-14 0 Q0 14 14 0 Z" fill="#C5A059" />
              <path
                d="M0 -18 C6 -10 6 -3 0 0 C-6 -3 -6 -10 0 -18 Z"
                fill="#FDE047"
                className="animate-flame"
              />
            </g>
          ))}
        </svg>
      );

    case "baraat":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full">
          <rect width="320" height="240" fill="#1F122B" />
          {[
            { cx: 80, cy: 65, c: "#F59E0B" },
            { cx: 240, cy: 55, c: "#FB7185" },
            { cx: 160, cy: 45, c: "#FDE047" }
          ].map((fw, i) => (
            <g key={i} className="animate-twinkle" style={{ animationDelay: `${i * 0.45}s` }}>
              <circle cx={fw.cx} cy={fw.cy} r="22" stroke={fw.c} strokeWidth="1.5" strokeDasharray="2 5" fill="none" />
              <circle cx={fw.cx} cy={fw.cy} r="10" stroke="#FFF" strokeWidth="1.2" strokeDasharray="1 4" fill="none" />
              <circle cx={fw.cx} cy={fw.cy} r="3" fill={fw.c} />
            </g>
          ))}
          <g transform="translate(160, 145)" className="animate-dhol-bounce">
            <ellipse cx="0" cy="0" rx="44" ry="28" fill="#9E1B24" stroke="#F4D799" strokeWidth="3" />
            <ellipse cx="-42" cy="0" rx="8" ry="26" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
            <ellipse cx="42" cy="0" rx="8" ry="26" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
            <path
              d="M-35 -20 L35 -10 M-35 -5 L35 5 M-35 10 L35 20 M-35 15 L35 -15"
              stroke="#FDE68A"
              strokeWidth="1.5"
            />
            <path d="M-65 -32 L-42 -6" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />
            <circle cx="-41" cy="-5" r="4.5" fill="#D97706" />
            <path d="M65 -32 L42 -6" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="65" y="130" fill="#FDE68A" fontSize="20" className="animate-float-petal">
            ♪
          </text>
          <text x="242" y="125" fill="#FB7185" fontSize="22" className="animate-float-petal">
            ♫
          </text>
        </svg>
      );

    case "jaimala":
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full">
          <rect width="320" height="240" fill="#2D1216" />
          <circle cx="160" cy="120" r="85" fill="#F59E0B" fillOpacity="0.12" />
          <g className="animate-couple-float" transform="translate(160, 122)">
            <ellipse
              cx="-22"
              cy="0"
              rx="42"
              ry="52"
              stroke="#E11D48"
              strokeWidth="10"
              strokeDasharray="3 8"
              fill="none"
            />
            <ellipse
              cx="-22"
              cy="0"
              rx="42"
              ry="52"
              stroke="#FDE047"
              strokeWidth="5"
              strokeDasharray="1 11"
              fill="none"
            />
            <ellipse
              cx="22"
              cy="0"
              rx="42"
              ry="52"
              stroke="#F59E0B"
              strokeWidth="10"
              strokeDasharray="3 8"
              fill="none"
            />
            <ellipse
              cx="22"
              cy="0"
              rx="42"
              ry="52"
              stroke="#FFFBEB"
              strokeWidth="5"
              strokeDasharray="1 11"
              fill="none"
            />
          </g>
          {[55, 95, 160, 225, 265].map((px, i) => (
            <circle
              key={i}
              cx={px}
              cy={40 + (i % 3) * 22}
              r="4.5"
              fill={i % 2 === 0 ? "#FB7185" : "#FBBF24"}
              className="animate-float-petal"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          ))}
        </svg>
      );

    case "pheras":
    default:
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full">
          <rect width="320" height="240" fill="#1F0D10" />
          {[50, 90, 130, 190, 230, 270].map((sx, idx) => (
            <circle
              key={idx}
              cx={sx}
              cy={35 + (idx % 2) * 18}
              r="2"
              fill="#FDE68A"
              className="animate-twinkle"
              style={{ animationDelay: `${idx * 0.3}s` }}
            />
          ))}
          <g transform="translate(160, 175)">
            <polygon points="-50,24 50,24 36,4 -36,4" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" />
            <polygon points="-36,4 36,4 26,-12 -26,-12" fill="#78350F" stroke="#FDE68A" strokeWidth="1.5" />
            <g className="animate-flame">
              <path
                d="M0 -85 C22 -55 28 -25 0 -8 C-28 -25 -22 -55 0 -85 Z"
                fill="#F59E0B"
              />
              <path
                d="M-12 -62 C6 -40 14 -20 -6 -8 C-22 -20 -20 -42 -12 -62 Z"
                fill="#EF4444"
              />
              <path
                d="M0 -54 C12 -35 12 -18 0 -9 C-12 -18 -12 -35 0 -54 Z"
                fill="#FEF08A"
              />
            </g>
            {[-55, -38, -20, 0, 20, 38, 55].map((ox, i) => (
              <circle
                key={i}
                cx={ox}
                cy={-95 + Math.abs(ox) * 0.45}
                r="3"
                fill="#FDE68A"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </g>
        </svg>
      );
  }
};

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isEnvelopeAnimating, setIsEnvelopeAnimating] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showFloatingPetals, setShowFloatingPetals] = useState(true);
  const audioRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedRitual, setSelectedRitual] = useState(null);

  useEffect(() => {
    const audio = new Audio(CUSTOM_SONG_URL);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const target = new Date(WEDDING_CONFIG.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleOpenEnvelope = () => {
    setIsEnvelopeAnimating(true);
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {
          // Playback can still be started via the floating audio button
        });
    }
    setTimeout(() => {
      setIsEnvelopeOpen(true);
    }, 800);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {});
    }
  };

  const handleWhatsAppShare = () => {
    const inviteLink =
      typeof window !== "undefined" && window.location.origin !== "null"
        ? `${window.location.origin}${window.location.pathname}`
        : "";

    const message =
      `॥ श्री गणेशाय नमः ॥\n\n` +
      `With the blessings of our parents, we joyfully invite you and your family to the auspicious *Shubh Vivah (Marriage Ceremony)* of\n` +
      `*${WEDDING_CONFIG.groomName} & ${WEDDING_CONFIG.brideName}* ✨\n\n` +
      `📅 *Date:* ${WEDDING_CONFIG.weddingDateDisplay}\n` +
      `🕖 *Reception of Baraat:* ${WEDDING_CONFIG.timings.baraat}\n` +
      `🌸 *Jaimala:* ${WEDDING_CONFIG.timings.jaimala}\n` +
      `🍽️ *Dinner:* ${WEDDING_CONFIG.timings.dinner}\n` +
      `📍 *Venue:* ${WEDDING_CONFIG.venueName}\n` +
      `(${WEDDING_CONFIG.venueAddress})\n\n` +
      `🗺️ *Google Maps Location:*\n${GOLDEN_CROWN_MAPS_URL}` +
      (inviteLink ? `\n\n💌 *Open Wedding Card:*\n${inviteLink}` : "");

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const handleShareVenueWhatsApp = () => {
    const venueMsg =
      `📍 *Wedding Venue Location — ${WEDDING_CONFIG.groomName} Weds ${WEDDING_CONFIG.brideName}*\n\n` +
      `*${WEDDING_CONFIG.venueName}*\n` +
      `${WEDDING_CONFIG.venueAddress}\n` +
      `Date: ${WEDDING_CONFIG.weddingDateDisplay} (${WEDDING_CONFIG.timings.baraat})\n\n` +
      `Google Maps Directions:\n${GOLDEN_CROWN_MAPS_URL}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(venueMsg)}`, "_blank", "noopener,noreferrer");
  };

  const handleDownloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Shubh Vivah Invitation//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${WEDDING_CONFIG.groomName} Weds ${WEDDING_CONFIG.brideName} — Shubh Vivah (Marriage Ceremony)`,
      "DTSTART:20261212T113000Z",
      "DTEND:20261212T183000Z",
      `LOCATION:${WEDDING_CONFIG.venueName}, ${WEDDING_CONFIG.venueAddress}`,
      `DESCRIPTION:Shubh Vivah of ${WEDDING_CONFIG.groomName} & ${WEDDING_CONFIG.brideName} at ${WEDDING_CONFIG.venueName}. Reception of Baraat: ${WEDDING_CONFIG.timings.baraat}, Jaimala: ${WEDDING_CONFIG.timings.jaimala}, Dinner: ${WEDDING_CONFIG.timings.dinner}. Google Maps: ${GOLDEN_CROWN_MAPS_URL}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `${WEDDING_CONFIG.groomName}-Weds-${WEDDING_CONFIG.brideName}-Golden-Crown-Rohini.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ILLUSTRATED_RITUALS = [
    {
      id: "ganesh",
      type: "ganesh",
      hindiTitle: "॥ श्री गणेश वंदना एवं मंगल कलश ॥",
      title: "Shubh Ganesh Vandana",
      timing: "Auspicious Beginning",
      description:
        "Invoking Lord Ganesha with sacred mantras, glowing brass diyas, and the auspicious Mangal Kalash to bless the couple with harmony and prosperity."
    },
    {
      id: "baraat",
      type: "baraat",
      hindiTitle: "॥ बारात स्वागत एवं ढोल धमाका ॥",
      title: "Reception of Baraat & Swagat",
      timing: WEDDING_CONFIG.timings.baraat,
      description:
        "A joyful royal procession filled with Punjabi dhol beats, dancing baraatis, floral showers, and warm Milni greetings at the gates of Golden Crown Banquet Hall."
    },
    {
      id: "jaimala",
      type: "jaimala",
      hindiTitle: "॥ शुभ वरमाला (जयमाला) समारोह ॥",
      title: "Jaimala (Varmala) Ceremony",
      timing: WEDDING_CONFIG.timings.jaimala,
      description:
        "Under a shower of fragrant rose and marigold petals, the bride and groom exchange sacred floral garlands symbolizing mutual respect and eternal partnership."
    },
    {
      id: "pheras",
      type: "pheras",
      hindiTitle: "॥ सप्तपदी एवं शुभ फेरे (तारों की छाँव में) ॥",
      title: "Saat Phere & Sacred Vows",
      timing: WEDDING_CONFIG.timings.pheras,
      description:
        "Around the sacred Havan Agni beneath the starry sky, seven sacred promises bind two souls and two families together forever."
    }
  ];

  const MARRIAGE_PROGRAMME = [
    {
      time: WEDDING_CONFIG.timings.baraat,
      title: "Reception of Baraat & Royal Swagat",
      hindi: "बारात स्वागत एवं मिलनी",
      detail: "Warm welcome of the Baraat with live Dhol, rose petal showers, and traditional Milni ceremony at the Golden Crown entrance.",
      icon: Music
    },
    {
      time: WEDDING_CONFIG.timings.jaimala,
      title: "Jaimala (Varmala) Ceremony",
      hindi: "शुभ जयमाला समारोह",
      detail: "Exchange of floral garlands by the Bride & Groom on the grand royal stage amidst family blessings and celebratory sparkles.",
      icon: Flower2
    },
    {
      time: WEDDING_CONFIG.timings.dinner,
      title: "Royal Wedding Feast & Celebrations",
      hindi: "प्रीतिभोज एवं संगीत",
      detail: "Relish a lavish multi-cuisine vegetarian royal banquet, live chaat counters, and traditional sweets at Golden Crown Banquet Hall.",
      icon: Star
    },
    {
      time: WEDDING_CONFIG.timings.pheras,
      title: "Shubh Muhurat — Saat Phere & Kanyadaan",
      hindi: "शुभ मुहूर्त फेरे (तारों की छाँव में)",
      detail: "Sacred Vedic marriage rituals, Kanyadaan, and Saptapadi (Seven Vows) around the holy fire under the auspicious floral Mandap.",
      icon: Flame
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2C1E1A] selection:bg-[#C5A059]/25 selection:text-[#2C1E1A] relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-sans-luxury {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        @keyframes swayGentle {
          0%, 100% { transform: rotate(-1.6deg); }
          50% { transform: rotate(1.6deg); }
        }
        @keyframes swayBell {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes coupleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes flameFlicker {
          0%, 100% { transform: scaleY(1) scaleX(1) rotate(-1deg); opacity: 0.95; }
          50% { transform: scaleY(1.12) scaleX(0.94) rotate(1.5deg); opacity: 1; }
        }
        @keyframes twinkleStar {
          0%, 100% { opacity: 0.25; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes dholBounce {
          0%, 100% { transform: translate(160px, 145px) scale(1) rotate(-1.5deg); }
          50% { transform: translate(160px, 141px) scale(1.05) rotate(1.5deg); }
        }
        @keyframes floatPetal {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-10px) rotate(12deg); opacity: 1; }
        }
        @keyframes fallDown {
          0% { transform: translateY(-10vh) translateX(0px) rotate(0deg); opacity: 0; }
          15% { opacity: 0.75; }
          85% { opacity: 0.75; }
          100% { transform: translateY(105vh) translateX(35px) rotate(360deg); opacity: 0; }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.55); }
          50% { box-shadow: 0 0 0 15px rgba(197, 160, 89, 0); }
        }
        @keyframes spinVerySlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-sway-gentle { animation: swayGentle 4.2s ease-in-out infinite; }
        .animate-sway-bell { animation: swayBell 3.2s ease-in-out infinite; }
        .animate-couple-float { animation: coupleFloat 3.8s ease-in-out infinite; }
        .animate-flame { animation: flameFlicker 1.2s ease-in-out infinite; transform-origin: center bottom; }
        .animate-twinkle { animation: twinkleStar 2.4s ease-in-out infinite; transform-origin: center; }
        .animate-dhol-bounce { animation: dholBounce 0.9s ease-in-out infinite; }
        .animate-float-petal { animation: floatPetal 3.2s ease-in-out infinite; }
        .animate-wax-pulse { animation: pulseGold 2.6s infinite; }
        .animate-mandala { animation: spinVerySlow 90s linear infinite; }
      `}</style>

      {showFloatingPetals && (
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
          {[
            { left: "6%", delay: "0s", dur: "11s", color: "#F59E0B", size: 11 },
            { left: "16%", delay: "2.5s", dur: "13s", color: "#E11D48", size: 9 },
            { left: "28%", delay: "1.2s", dur: "10s", color: "#FBBF24", size: 10 },
            { left: "42%", delay: "4s", dur: "14s", color: "#BE123C", size: 11 },
            { left: "58%", delay: "0.7s", dur: "12s", color: "#F59E0B", size: 10 },
            { left: "72%", delay: "3.1s", dur: "11.5s", color: "#E11D48", size: 9 },
            { left: "84%", delay: "1.8s", dur: "13.5s", color: "#FBBF24", size: 11 },
            { left: "93%", delay: "5s", dur: "10.5s", color: "#E11D48", size: 9 }
          ].map((p, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: "-20px",
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size * 1.3}px`,
                backgroundColor: p.color,
                borderRadius: "60% 40% 70% 30% / 60% 50% 50% 40%",
                animation: `fallDown ${p.dur} linear infinite`,
                animationDelay: p.delay,
                opacity: 0.65
              }}
            />
          ))}
        </div>
      )}

      {!isEnvelopeOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2A1013] px-4 py-8 transition-all duration-1000 ${
            isEnvelopeAnimating ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <MandalaWatermark className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] absolute opacity-20 animate-mandala" />

          <div className="relative z-10 w-full max-w-lg bg-[#FAF6EE] border-2 border-[#C5A059] shadow-[0_25px_80px_rgba(0,0,0,0.55)] p-6 sm:p-10 text-center rounded-sm">
            <div className="border border-[#C5A059]/45 p-6 sm:p-8 relative">
              <div className="w-3.5 h-3.5 border-t-2 border-l-2 border-[#9E1B24] absolute top-2 left-2" />
              <div className="w-3.5 h-3.5 border-t-2 border-r-2 border-[#9E1B24] absolute top-2 right-2" />
              <div className="w-3.5 h-3.5 border-b-2 border-l-2 border-[#9E1B24] absolute bottom-2 left-2" />
              <div className="w-3.5 h-3.5 border-b-2 border-r-2 border-[#9E1B24] absolute bottom-2 right-2" />

              <p className="text-xs tracking-[0.25em] text-[#9E1B24] uppercase font-semibold mb-2">
                ॥ श्री गणेशाय नमः ॥
              </p>

              <p className="text-[11px] tracking-[0.22em] uppercase text-[#7A6248] mb-3">
                Shubh Vivah • Auspicious Wedding Invitation
              </p>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2C1E1A] tracking-wide mb-1">
                {WEDDING_CONFIG.groomName}{" "}
                <span className="italic font-normal text-[#C5A059]">&amp;</span>{" "}
                {WEDDING_CONFIG.brideName}
              </h1>

              <p className="font-serif-luxury italic text-base sm:text-lg text-[#9E1B24] mb-1">
                {WEDDING_CONFIG.weddingDateDisplay}
              </p>
              <p className="text-xs text-[#6E5A4F] mb-5 font-medium">
                {WEDDING_CONFIG.venueName}
              </p>

              <div className="bg-[#F3ECE0] border border-[#C5A059]/50 py-3 px-5 mb-7 rounded-sm">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#8C7355] mb-0.5">
                  Requesting The Honour Of Your Presence
                </p>
                <p className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2C1E1A]">
                  Cordially Invited With Family
                </p>
              </div>

              <div className="flex flex-col items-center">
                <button
                  onClick={handleOpenEnvelope}
                  aria-label="Tap wax seal to open wedding invitation"
                  className="group relative w-24 h-24 rounded-full bg-gradient-to-br from-[#B81D24] via-[#8E141B] to-[#590A0E] text-[#FAF6EE] shadow-xl flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 animate-wax-pulse cursor-pointer border-4 border-[#C5A059]"
                >
                  <div className="w-20 h-20 rounded-full border border-[#F4D799]/50 flex flex-col items-center justify-center">
                    <span className="font-serif-luxury text-2xl font-bold tracking-widest leading-none text-[#F4D799]">
                      {WEDDING_CONFIG.groomName[0]}&bull;{WEDDING_CONFIG.brideName[0]}
                    </span>
                    <span className="text-[8px] tracking-[0.2em] uppercase mt-1 text-[#FAF6EE]/90">
                      Shubh Vivah
                    </span>
                  </div>
                </button>

                <span className="mt-4 text-xs tracking-[0.22em] uppercase text-[#7A6248] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E1B24]" />
                  Tap Royal Seal to Open Card
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setShowFloatingPetals((prev) => !prev)}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border transition-all cursor-pointer ${
            showFloatingPetals
              ? "bg-[#FAF6EE] text-[#9E1B24] border-[#C5A059]"
              : "bg-[#FAF6EE]/70 text-[#8C7355] border-[#C5A059]/40"
          }`}
          title={showFloatingPetals ? "Hide Falling Flower Petals" : "Show Falling Flower Petals"}
        >
          <Flower2 className="w-4 h-4" />
        </button>

        <button
          onClick={toggleMusic}
          aria-label="Toggle wedding song"
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border transition-all cursor-pointer ${
            isMusicPlaying
              ? "bg-[#C5A059] text-[#2C1E1A] border-[#C5A059]"
              : "bg-[#FAF6EE] text-[#2C1E1A] border-[#C5A059]/60"
          }`}
          title={isMusicPlaying ? "Pause Wedding Song" : "Play Wedding Song"}
        >
          {isMusicPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      <header className="sticky top-0 z-30 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="font-serif-luxury text-2xl font-bold tracking-wider text-[#7A181E] flex items-center gap-2"
          >
            <span>{WEDDING_CONFIG.groomName}</span>
            <span className="text-[#C5A059] text-lg">&amp;</span>
            <span>{WEDDING_CONFIG.brideName}</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs tracking-[0.18em] uppercase text-[#5C493E] font-medium">
            <a href="#hero" className="hover:text-[#9E1B24] transition-colors">
              Invitation
            </a>
            <a href="#ceremony" className="hover:text-[#9E1B24] transition-colors">
              Marriage Programme
            </a>
            <a href="#illustrations" className="hover:text-[#9E1B24] transition-colors">
              Animated Rituals
            </a>
            <a href="#venue" className="hover:text-[#9E1B24] transition-colors">
              Venue &amp; Map
            </a>
            <a
              href={GOLDEN_CROWN_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7A181E] text-[#FAF6EE] hover:bg-[#5E1116] transition-colors rounded-sm flex items-center gap-1.5 border border-[#C5A059]/50"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F4D799]" />
              Directions
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <a
              href="#venue"
              className="text-[11px] tracking-wider uppercase px-3 py-1.5 bg-[#7A181E] text-[#FAF6EE] rounded-sm flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-[#F4D799]" />
              Venue Map
            </a>
          </div>
        </div>
      </header>

      <section id="hero" className="relative pt-10 pb-20 px-4 overflow-hidden">
        <MandalaWatermark className="w-[620px] h-[620px] -top-48 -left-48 absolute opacity-15" />
        <MandalaWatermark className="w-[620px] h-[620px] -bottom-48 -right-48 absolute opacity-15" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#9E1B24] uppercase font-semibold mb-2">
            ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#C5A059]/50 my-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#9E1B24]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#5C493E]">
              Cordially Invited <strong className="text-[#7A181E]">With Family</strong>
            </span>
          </div>

          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-[#5C493E] max-w-2xl mx-auto leading-relaxed mb-4">
            <span className="font-semibold text-[#2C1E1A]">{WEDDING_CONFIG.groomParents}</span>
            <span className="text-[#C5A059] mx-2">&amp;</span>
            <span className="font-semibold text-[#2C1E1A]">{WEDDING_CONFIG.brideParents}</span>
            <span className="block mt-1.5 text-[11px] sm:text-xs text-[#7A6248]">
              soliciting your gracious presence and blessings on the auspicious occasion of the{" "}
              <strong className="text-[#9E1B24]">Shubh Vivah (Marriage Ceremony)</strong> of
            </span>
          </p>

          <h1 className="font-serif-luxury text-6xl sm:text-7xl md:text-8xl font-bold text-[#7A181E] tracking-tight leading-none my-3">
            {WEDDING_CONFIG.groomName}{" "}
            <span className="italic font-normal text-[#C5A059] inline-block mx-1 sm:mx-2">
              Weds
            </span>{" "}
            {WEDDING_CONFIG.brideName}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 mb-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#2C1E1A] font-medium">
            <span className="text-[#9E1B24] font-semibold">{WEDDING_CONFIG.weddingDateDisplay}</span>
            <span className="text-[#C5A059]">&bull;</span>
            <span>{WEDDING_CONFIG.venueName}</span>
          </div>

          <LotusDivider className="w-64 sm:w-80" />

          <AnimatedMandapHeroIllustration
            groomName={WEDDING_CONFIG.groomName}
            brideName={WEDDING_CONFIG.brideName}
          />

          <div className="max-w-2xl mx-auto mt-10">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#8C7355] font-semibold mb-4">
              Counting Down To The Auspicious Marriage Ceremony
            </p>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-5">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F3ECE0] border border-[#C5A059]/50 py-4 sm:py-5 px-2 rounded-sm shadow-sm"
                >
                  <div className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#7A181E]">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7A6248] mt-1 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={GOLDEN_CROWN_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#7A181E] text-[#FAF6EE] hover:bg-[#5E1116] transition-colors text-xs tracking-[0.2em] uppercase font-medium rounded-sm shadow-md flex items-center gap-2 border border-[#C5A059]/60"
              >
                <Navigation className="w-4 h-4 text-[#F4D799]" />
                Navigate to Golden Crown, Rohini
              </a>
              <button
                onClick={handleDownloadICS}
                className="px-6 py-3.5 bg-[#FAF6EE] text-[#2C1E1A] border border-[#C5A059] hover:bg-[#F3ECE0] transition-colors text-xs tracking-[0.18em] uppercase font-medium rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#9E1B24]" />
                Add Marriage to Calendar (.ICS)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ceremony"
        className="py-20 px-4 bg-[#F3ECE0] border-y border-[#C5A059]/35 relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-[#9E1B24] font-semibold mb-2">
              ॥ शुभ विवाह कार्यक्रम ॥
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2C1E1A]">
              The Marriage Ceremony
            </h2>
            <LotusDivider className="w-56" />
            <p className="text-sm text-[#5C493E] leading-relaxed">
              Join us for an unforgettable evening of joy, music, sacred rituals, and royal hospitality as{" "}
              <strong>{WEDDING_CONFIG.groomName}</strong> and{" "}
              <strong>{WEDDING_CONFIG.brideName}</strong> tie the knot at{" "}
              <strong>{WEDDING_CONFIG.venueName}</strong>.
            </p>
          </div>

          <div className="bg-[#FAF6EE] border-2 border-[#C5A059] rounded-sm p-6 sm:p-10 shadow-[0_20px_55px_rgba(122,24,30,0.08)] relative">
            <div className="w-4 h-4 border-t-2 border-l-2 border-[#9E1B24] absolute top-3 left-3" />
            <div className="w-4 h-4 border-t-2 border-r-2 border-[#9E1B24] absolute top-3 right-3" />
            <div className="w-4 h-4 border-b-2 border-l-2 border-[#9E1B24] absolute bottom-3 left-3" />
            <div className="w-4 h-4 border-b-2 border-r-2 border-[#9E1B24] absolute bottom-3 right-3" />

            <div className="text-center pb-6 mb-8 border-b border-[#C5A059]/35">
              <span className="inline-block px-4 py-1 bg-[#7A181E] text-[#F4D799] text-[11px] tracking-[0.24em] uppercase font-medium rounded-full mb-3">
                Shubh Vivah • Single Grand Celebration
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2C1E1A]">
                {WEDDING_CONFIG.weddingDateDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-[#7A181E] font-medium mt-2 flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#9E1B24] shrink-0" />
                {WEDDING_CONFIG.venueName}
              </p>
              <p className="text-xs text-[#6E5A4F] mt-0.5">{WEDDING_CONFIG.venueAddress}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {MARRIAGE_PROGRAMME.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F3ECE0]/85 border border-[#C5A059]/45 p-5 rounded-sm flex items-start gap-4 hover:border-[#9E1B24] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#7A181E] text-[#F4D799] flex items-center justify-center shrink-0 mt-0.5 shadow">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold tracking-wider uppercase text-[#9E1B24] bg-[#FAF6EE] px-2.5 py-0.5 rounded border border-[#C5A059]/40">
                          {step.time}
                        </span>
                        <span className="text-xs text-[#8C7355] font-medium">{step.hindi}</span>
                      </div>
                      <h4 className="font-serif-luxury text-2xl font-bold text-[#2C1E1A]">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#5C493E] leading-relaxed mt-1">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#2A1013] text-[#FAF6EE] p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#F4D799]">
                  Wedding Venue
                </p>
                <p className="font-serif-luxury text-2xl font-semibold">
                  {WEDDING_CONFIG.venueName}
                </p>
                <p className="text-xs text-[#E2D5C1]">{WEDDING_CONFIG.venueAddress}</p>
              </div>
              <a
                href={GOLDEN_CROWN_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B06A] text-[#1F0D0F] font-semibold text-xs tracking-[0.18em] uppercase rounded-sm flex items-center gap-2 shrink-0 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Open Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="illustrations" className="py-20 px-4 bg-[#FAF6EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-[#9E1B24] font-semibold mb-2">
              Sacred Moments in Motion
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2C1E1A]">
              Animated Wedding Rituals
            </h2>
            <LotusDivider className="w-56" />
            <p className="text-sm text-[#5C493E] leading-relaxed">
              Every ritual of our Indian wedding celebrates love, family, and timeless heritage. Click any animated illustration to view its blessing in full view.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ILLUSTRATED_RITUALS.map((ritual) => (
              <div
                key={ritual.id}
                onClick={() => setSelectedRitual(ritual)}
                className="group bg-[#F3ECE0] border border-[#C5A059]/50 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="h-52 w-full overflow-hidden relative border-b border-[#C5A059]/40">
                  <AnimatedRitualScene type={ritual.type} />
                  <div className="absolute top-3 right-3 bg-[#2A1013]/85 text-[#F4D799] text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#C5A059]/40">
                    {ritual.timing}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-[#9E1B24] font-semibold mb-1">
                      {ritual.hindiTitle}
                    </p>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#2C1E1A] mb-2 group-hover:text-[#7A181E] transition-colors">
                      {ritual.title}
                    </h3>
                    <p className="text-xs text-[#5C493E] leading-relaxed">{ritual.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#C5A059]/25 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8C7355] font-medium">
                    <span>Tap to Enlarge Artwork</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRitual && (
        <div
          className="fixed inset-0 z-50 bg-[#1B0A0C]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRitual(null)}
        >
          <div
            className="bg-[#FAF6EE] border-2 border-[#C5A059] max-w-lg w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 w-full relative">
              <AnimatedRitualScene type={selectedRitual.type} />
              <button
                onClick={() => setSelectedRitual(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#2A1013]/80 text-[#FAF6EE] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 text-center">
              <p className="text-xs text-[#9E1B24] font-semibold mb-1">
                {selectedRitual.hindiTitle}
              </p>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#2C1E1A] mb-1">
                {selectedRitual.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#8C7355] mb-4">
                {selectedRitual.timing}
              </p>
              <p className="text-sm text-[#5C493E] leading-relaxed mb-5">
                {selectedRitual.description}
              </p>
              <button
                onClick={() => setSelectedRitual(null)}
                className="px-6 py-2.5 bg-[#7A181E] text-[#FAF6EE] text-xs tracking-widest uppercase rounded-sm cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <section
        id="venue"
        className="py-20 px-4 bg-[#F3ECE0] border-t border-[#C5A059]/35"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-[#9E1B24] font-semibold mb-2">
              Wedding Destination &amp; Navigation
            </p>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#2C1E1A]">
              {WEDDING_CONFIG.venueName}
            </h2>
            <LotusDivider className="w-56" />
            <p className="text-sm text-[#5C493E]">
              Conveniently located near Swarn Jayanti Park (Japanese Park) in Sector 12, Rohini, New Delhi with ample valet parking for all guests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-[#FAF6EE] border-2 border-[#C5A059] p-6 sm:p-8 rounded-sm flex flex-col justify-between shadow-md">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#9E1B24] font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Confirmed Venue Location
                </span>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#2C1E1A] mb-3">
                  {WEDDING_CONFIG.venueName}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#5C493E] my-5 bg-[#F3ECE0] p-4 rounded-sm border border-[#C5A059]/40">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9E1B24] shrink-0 mt-1" />
                    <div>
                      <strong className="text-[#2C1E1A] block">Address:</strong>
                      {WEDDING_CONFIG.venueAddress}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#2C1E1A] block">Date &amp; Time:</strong>
                      {WEDDING_CONFIG.weddingDateDisplay} • {WEDDING_CONFIG.timings.baraat}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#2C1E1A] block">Venue Contact:</strong>
                      {WEDDING_CONFIG.venuePhone}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6E5A4F] leading-relaxed mb-6">
                  <strong>Nearest Landmarks:</strong> Adjacent to Swarn Jayanti Park (Japanese Park), Sector 12 Rohini, and minutes away from Rohini West Metro Station (Red Line).
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={GOLDEN_CROWN_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-[#7A181E] hover:bg-[#5E1116] text-[#FAF6EE] text-xs tracking-[0.2em] uppercase font-medium rounded-sm flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#F4D799]" />
                  Get Directions on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleShareVenueWhatsApp}
                  className="w-full py-3 px-5 bg-[#1F6E43] hover:bg-[#175433] text-white text-xs tracking-[0.18em] uppercase font-medium rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Share Venue Pin on WhatsApp
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF6EE] border-2 border-[#C5A059] p-3 rounded-sm shadow-md min-h-[380px] flex flex-col">
              <div className="relative flex-1 w-full rounded-sm overflow-hidden border border-[#C5A059]/40 min-h-[340px]">
                <iframe
                  title="Golden Crown - Banquet Hall Rohini Map"
                  src={GOLDEN_CROWN_EMBED_URL}
                  className="w-full h-full min-h-[340px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="pt-2.5 px-2 flex items-center justify-between text-[11px] text-[#6E5A4F]">
                <span>Coordinates: 28.7268° N, 77.1244° E (Sector 12, Rohini)</span>
                <a
                  href={GOLDEN_CROWN_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E1B24] font-semibold underline flex items-center gap-1"
                >
                  Open Full Map <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-[#2A1013] text-[#FAF6EE] text-center relative overflow-hidden border-t-2 border-[#C5A059]">
        <div className="max-w-xl mx-auto relative z-10">
          <p className="text-xs tracking-[0.26em] uppercase text-[#F4D799] mb-2">
            ॥ स्नेहिल निमंत्रण ॥
          </p>
          <p className="font-serif-luxury italic text-lg text-[#E6D5B8] mb-2">
            Awaiting your gracious presence &amp; blessings
          </p>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-wide text-[#FAF6EE] mb-2">
            {WEDDING_CONFIG.groomName} <span className="text-[#C5A059]">&amp;</span>{" "}
            {WEDDING_CONFIG.brideName}
          </h2>
          <p className="text-xs tracking-[0.22em] uppercase text-[#C5A059] mb-6">
            {WEDDING_CONFIG.weddingDateDisplay} • {WEDDING_CONFIG.venueName}
          </p>

          <p className="text-xs text-[#D8C3A5] mb-8">
            <strong>R.S.V.P. (With Best Compliments):</strong> All Near &amp; Dear Friends &amp; Family Members
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setIsEnvelopeAnimating(false);
                setIsEnvelopeOpen(false);
              }}
              className="px-4 py-2 border border-[#C5A059]/50 text-xs tracking-[0.18em] uppercase text-[#FAF6EE] hover:border-[#C5A059] rounded-sm cursor-pointer"
            >
              Replay Envelope Opening
            </button>
            <button
              onClick={handleWhatsAppShare}
              className="px-4 py-2 bg-[#1F6E43] hover:bg-[#175433] text-white font-semibold text-xs tracking-[0.18em] uppercase rounded-sm flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Share Invitation on WhatsApp
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}