import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MessageSquareText, ShieldAlert } from "lucide-react";

interface RedeemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJoinWhatsApp: () => void;
}

const steps = [
  "Click the button below to join our official WhatsApp group",
  "Our support team will verify your winning information",
  "Follow the redemption instructions provided by our team",
  "Receive your prize your reward",
];

const RedeemModal = ({ open, onOpenChange, onJoinWhatsApp }: RedeemModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl max-h-[95vh] overflow-y-auto">
        <div className="text-center">
          {/* Icon */}
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquareText className="w-7 h-7 text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">
            Redeem Your Reward
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            To claim your prize, please join our official WhatsApp group where our team will assist you with the redemption process.
          </p>

          {/* Steps */}
          <div className="border border-border rounded-xl p-4 mb-6 text-left">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Notice */}
          <div className="bg-notice-bg border border-notice-border rounded-xl p-4 mb-6 text-left flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">Official Verification</p>
              <p className="text-xs text-primary mt-0.5">
                Our support team will verify your win and guide you through receiving your reward.
              </p>
            </div>
          </div>

          {/* Join Button */}
          <button
            onClick={onJoinWhatsApp}
            className="w-full bg-primary text-primary-foreground font-semibold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageSquareText className="w-5 h-5" />
            Join Our Official Whatsapp Group
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RedeemModal;
