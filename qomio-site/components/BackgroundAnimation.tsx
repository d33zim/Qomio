'use client'

import { useEffect } from 'react'

export default function BackgroundAnimation() {
  useEffect(() => {
    // Load Unicorn Studio script dynamically
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            if(window.UnicornStudio && !window.UnicornStudio.isInitialized){
              if(typeof UnicornStudio !== 'undefined') {
                UnicornStudio.init();
              }
              window.UnicornStudio.isInitialized=!0;
            }
          };
          (document.head || document.body).appendChild(i);
        }
      }();
    `
    document.body.appendChild(script)
  }, [])

  return (
    <>
      {/* Unicorn Studio Background - absolute within Hero section */}
      <div
        className="absolute inset-x-0 top-0 h-[900px] pointer-events-none overflow-hidden brightness-50 saturate-50"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)',
          zIndex: 0,
        }}
      >
        <div
          data-us-project="MSvSkmJb9Ax55PeV6eku"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] min-w-full min-h-full"
        ></div>
      </div>

      {/* All beams container - absolute overlay within Hero section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Left vertical beam - responsive positioning */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam-v"></div>
        </div>

        {/* Right vertical beam - responsive positioning */}
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam-v"></div>
        </div>
      </div>
    </>
  )
}
