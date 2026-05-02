"use client";
import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { PROPERTY } from "@/lib/guide-config";
import { Star, ExternalLink, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionReview() {
  const { lang } = useLang();
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <div className="guide-card p-4 mb-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-1">
          {lang === "el" ? "Η Αξιολόγησή σας" : "Your Review"}
        </p>
        <p className="text-[12px] text-warm mb-4">
          {lang === "el"
            ? "Η γνώμη σας μας βοηθά να γίνουμε καλύτεροι. Ευχαριστούμε!"
            : "Your feedback helps us improve. Thank you!"}
        </p>

        {sent ? (
          <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-xl px-4 py-4">
            <Check size={16} strokeWidth={2} />
            <span className="text-[13px] font-medium">
              {lang === "el" ? "Ευχαριστούμε πολύ! Η αξιολόγησή σας καταγράφηκε." : "Thank you so much! Your review has been recorded."}
            </span>
          </div>
        ) : (
          <>
            {/* Star picker */}
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  onClick={() => setStars(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  className="text-3xl leading-none transition-transform hover:scale-110"
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                >
                  <Star
                    size={28}
                    strokeWidth={1.5}
                    className={cn(
                      "transition-colors",
                      n <= (hover || stars) ? "fill-terra text-terra" : "text-stone/20",
                    )}
                  />
                </button>
              ))}
            </div>

            <label className="text-[11px] text-pb block mb-1">{lang === "el" ? "Όνομα" : "Name"}</label>
            <input
              type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder={lang === "el" ? "Το όνομά σας" : "Your name"}
              className="w-full border border-stone/15 rounded-lg px-3 py-2 text-[13px] text-ink bg-white mb-3 focus:outline-none focus:border-sea"
            />
            <label className="text-[11px] text-pb block mb-1">
              Email <span className="text-pb/60">({lang === "el" ? "προαιρετικό" : "optional"})</span>
            </label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full border border-stone/15 rounded-lg px-3 py-2 text-[13px] text-ink bg-white mb-3 focus:outline-none focus:border-sea"
            />
            <label className="text-[11px] text-pb block mb-1">{lang === "el" ? "Σχόλιο" : "Comment"}</label>
            <textarea
              value={comment} onChange={e => setComment(e.target.value)}
              placeholder={lang === "el" ? "Πείτε μας για την εμπειρία σας..." : "Tell us about your experience..."}
              rows={4}
              className="w-full border border-stone/15 rounded-lg px-3 py-2 text-[13px] text-ink bg-white mb-4 resize-none focus:outline-none focus:border-sea"
            />
            <button onClick={submit} className="submit-btn flex items-center justify-center gap-2">
              <Send size={13} strokeWidth={1.5} />
              {lang === "el" ? "Αποστολή Αξιολόγησης" : "Submit Review"}
            </button>
          </>
        )}
      </div>

      {/* External platforms */}
      <div className="guide-card p-4">
        <p className="text-[10px] tracking-widest uppercase text-pb mb-3">
          {lang === "el" ? "Αξιολογήστε μας και σε:" : "Also review us on:"}
        </p>
        <div className="flex flex-col gap-2">
          <a href={PROPERTY.booking} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 p-3 border border-stone/10 rounded-xl hover:border-sea/30 transition-colors">
            <div className="w-8 h-8 bg-[#003580] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[11px] font-bold">B.</span>
            </div>
            <span className="text-[13px] text-ink flex-1">{lang === "el" ? "Αξιολόγηση στο Booking.com" : "Review on Booking.com"}</span>
            <ExternalLink size={13} strokeWidth={1.5} className="text-pb" />
          </a>
          <a href={PROPERTY.google} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 p-3 border border-stone/10 rounded-xl hover:border-sea/30 transition-colors">
            <div className="w-8 h-8 bg-[#4285F4] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[11px] font-bold">G</span>
            </div>
            <span className="text-[13px] text-ink flex-1">{lang === "el" ? "Αξιολόγηση στο Google" : "Review on Google"}</span>
            <ExternalLink size={13} strokeWidth={1.5} className="text-pb" />
          </a>
        </div>
      </div>
    </>
  );
}
