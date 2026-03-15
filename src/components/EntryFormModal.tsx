import { useState } from "react";
import { User, Mail, Phone, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface EntryFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: (data: { name: string; email: string; phone: string }) => void;
}

const EntryFormModal = ({ open, onOpenChange, onContinue }: EntryFormModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    onContinue({ name: name.trim(), email: email.trim(), phone: phone.trim() });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
          Enter Your Details to Play
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-8">
          Please provide your details to access the Spin-to-Win wheel. This helps us verify winners and deliver rewards correctly.
        </p>

        {/* Form */}
        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
              <input
                type="email"
                placeholder="johndoe@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
              <input
                type="tel"
                placeholder="08153735233"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Privacy notice */}
        <div className="mt-6 bg-notice-bg border border-notice-border rounded-xl px-5 py-3.5 flex items-center gap-2.5">
          <Lock className="w-4 h-4 text-primary shrink-0" />
          <p className="text-xs sm:text-sm text-primary font-medium italic">
            Your information is safe and will only be used to contact winners.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim() || !email.trim() || !phone.trim()}
          className="mt-8 w-full bg-primary text-primary-foreground font-semibold text-base py-4 rounded-xl inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to spin
          <span className="text-lg">←</span>
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default EntryFormModal;
