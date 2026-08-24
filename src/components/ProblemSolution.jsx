import React from 'react';
import sadFullBody from '../assets/sadFullBody.png';
import sadIconFace from '../assets/sadIconFace.png';
import approveWholeBody from '../assets/approveWholeBody.png';
import withinCircle from '../assets/withinCircle.jpg';

export default function ProblemSolution() {
  return (
    <section id="chaos-clarity" className="py-20 px-5 bg-[#060E20] border-y border-[#334155]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            The Road Belongs to Those Who Stay Connected
          </h2>
          <p className="text-base text-[#BEC8D2] font-medium">
            See the difference between relying on outdated group chats and experiencing real-time RideOut telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: The Chaos */}
          <div className="bg-[#1E293B] p-6 md:p-8 rounded-2xl border border-[#EF4444]/40 flex flex-col justify-between gap-6 relative overflow-hidden shadow-xl h-full transition-all duration-300 hover:border-[#EF4444] hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#EF4444]">
                <span className="material-symbols-outlined text-3xl">sms_failed</span>
                <h3 className="text-2xl font-black">The Chaos</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40 rounded-full text-xs font-black uppercase">
                  Unconnected
                </span>
                <img 
                  src={sadIconFace} 
                  alt="Sad Mascot Face" 
                  className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                />
              </div>
            </div>

            {/* Confusing Group Chat Simulated Messages Box */}
            <div className="relative z-10 bg-[#0F172A] rounded-xl border border-[#EF4444]/30 overflow-hidden shadow-lg p-4 flex flex-col justify-between h-[340px] md:h-[380px]">
              {/* Chat Status Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#334155]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EF4444]">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
                  UNREAD GROUP CHAT (14 MESSAGES)
                </div>
                <span className="text-[10px] font-mono text-[#88929B]">4 RIDERS LOST</span>
              </div>

              {/* Chat Message Stream */}
              <div className="space-y-3 my-auto overflow-hidden">
                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] text-[#BEC8D2] ml-auto max-w-[85%] text-right font-medium text-xs">
                  "Where are you guys? I pulled over at exit 42!"
                </div>

                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#EF4444]/40 text-white mr-auto max-w-[85%] text-left font-medium text-xs">
                  <div className="text-[10px] text-[#EF4444] font-bold mb-0.5">Dave (Lost)</div>
                  "Took a wrong turn 5 miles back. Phone battery at 4%!"
                </div>

                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] text-[#BEC8D2] ml-auto max-w-[85%] text-right font-medium text-xs">
                  "Everyone stop! Trying to check Google Maps..."
                </div>

                <div className="bg-[#1E293B] p-3 rounded-xl border border-[#EF4444]/40 text-white mr-auto max-w-[85%] text-left font-medium text-xs">
                  <div className="text-[10px] text-[#F59E0B] font-bold mb-0.5">Sam (No Signal)</div>
                  "Lost GPS signal in mountain pass, who has the route file?"
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="bg-[#1E293B] p-2 rounded-lg border border-[#334155] flex items-center justify-between text-xs text-[#88929B]">
                <span>Type a message...</span>
                <span className="material-symbols-outlined text-base text-[#EF4444]">send</span>
              </div>
            </div>

            {/* Sad Mascot Illustration */}
            <div className="flex items-center gap-4 bg-[#0F172A]/80 p-4 rounded-xl border border-[#334155]">
              <img 
                src={sadFullBody} 
                alt="Sad Mascot Lost" 
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div className="text-xs text-[#BEC8D2] font-medium leading-relaxed">
                <strong className="text-[#EF4444] block font-bold text-sm">Frustration & Safety Risks</strong>
                Pulling over to check maps or texting while riding is dangerous. Miscommunication separates riders & could cause an accident.
              </div>
            </div>
          </div>

          {/* Card 2: The Clarity */}
          <div className="bg-[#1E293B] p-6 md:p-8 rounded-2xl border border-[#0EA5E9]/50 flex flex-col justify-between gap-6 relative overflow-hidden shadow-xl h-full transition-all duration-300 hover:border-[#0EA5E9] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            <div className="absolute inset-0 map-grid opacity-40 pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3 text-[#0EA5E9]">
                <span className="material-symbols-outlined text-3xl">map</span>
                <h3 className="text-2xl font-black">The Clarity</h3>
              </div>
              <span className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] border border-[#10B981] rounded-full text-xs font-black uppercase">
                RideOut Connected
              </span>
            </div>

            {/* Real Full Within Circle Telemetry UI Image */}
            <div className="relative z-10 bg-[#0F172A] rounded-xl border border-[#0EA5E9]/40 overflow-hidden shadow-lg p-2 flex items-center justify-center h-[340px] md:h-[380px]">
              <img 
                src={withinCircle} 
                alt="RideOut Within Circle Telemetry" 
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#10B981]/50 text-[11px] font-black text-[#10B981] flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                PACK IN SAFE GEOFENCE CIRCLE
              </div>
            </div>

            {/* Approved Mascot Illustration */}
            <div className="relative z-10 flex items-center gap-4 bg-[#0F172A]/90 p-4 rounded-xl border border-[#0EA5E9]/40">
              <img 
                src={approveWholeBody} 
                alt="Approve Mascot" 
                className="w-14 h-14 object-contain flex-shrink-0 drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]"
              />
              <div className="text-xs text-[#BEC8D2] font-medium leading-relaxed">
                <strong className="text-[#0EA5E9] block font-bold text-sm">Instant Visual Telemetry</strong>
                Instantly know where everyone is and how far they are from the rest of the pack.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
