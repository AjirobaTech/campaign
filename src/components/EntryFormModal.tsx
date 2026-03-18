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
  onEmailExists: () => void;
}

const EntryFormModal = ({ open, onOpenChange, onContinue, onEmailExists }: EntryFormModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\d{11}$/.test(phone);
  };

  const isFormValid = name.trim() !== "" && validateEmail(email) && validatePhone(phone) && !emailError;

  const checkEmailExists = async (emailToCheck: string) => {
    if (!validateEmail(emailToCheck)) return false;
    
    try {
      const response = await fetch(`https://staging.ajiroba.ng/v1/admin/campaigns/check-email/?email=${encodeURIComponent(emailToCheck)}`);
      const data = await response.json();
      // Adjusting based on common API patterns, assuming data.exists or similar
      if (data.exists || data.status === "already_used" || data.message?.toLowerCase().includes("used")) {
        // setEmailError("email already used");
        onEmailExists();
        return true;
      }
      setEmailError("");
      return false;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid || isLoading) return;
    
    setIsLoading(true);
    const exists = await checkEmailExists(email.trim());
    setIsLoading(false);
    
    if (exists) return;
    
    onContinue({ name: name.trim(), email: email.trim(), phone: phone.trim() });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-lg p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                onBlur={() => checkEmailExists(email.trim())}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${email && (!validateEmail(email) || emailError) ? 'border-destructive' : 'border-input'} bg-muted/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
              />
            </div>
            {email && !validateEmail(email) && (
              <p className="text-[10px] text-destructive mt-1 ml-1 font-medium">Please enter a valid email address</p>
            )}
            {emailError && (
              <p className="text-[10px] text-destructive mt-1 ml-1 font-medium">{emailError}</p>
            )}
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
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${phone && !validatePhone(phone) ? 'border-destructive' : 'border-input'} bg-muted/30 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
              />
            </div>
            {phone && !validatePhone(phone) && (
              <p className="text-[10px] text-destructive mt-1 ml-1 font-medium">Must be exactly 11 digits</p>
            )}
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
          disabled={!isFormValid || isLoading}
          className="mt-8 w-full bg-primary text-primary-foreground font-semibold text-base py-4 rounded-xl inline-flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Checking...
            </span>
          ) : (
            <>
              Continue to spin
              <span className="text-lg">←</span>
            </>
          )}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default EntryFormModal;
