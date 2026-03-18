import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertCircle, XCircle } from "lucide-react";

interface AlreadyParticipatedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AlreadyParticipatedModal = ({ open, onOpenChange }: AlreadyParticipatedModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-md p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-3">
            Wait a second!
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            You've already participated in this campaign. Each participant is allowed only one entry to keep it fair for everyone.
          </p>

          {/* Notice Box */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-8 text-left flex items-start gap-3">
            <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">Entry Limit Reached</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Our records show that this email address has already been used to spin the wheel.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="w-full bg-primary text-primary-foreground font-semibold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity shadow-lg"
          >
            Got it, thanks!
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlreadyParticipatedModal;
