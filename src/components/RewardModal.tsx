import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Gift } from "lucide-react";

interface RewardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prize: string;
  onRedeem: () => void;
}

const RewardModal = ({ open, onOpenChange, prize, onRedeem }: RewardModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            🎊 Congratulations!
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            You've won a reward! We have sent you a mail of your reward
          </p>

          {/* Prize Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-6">
            {/* Top gradient section */}
            <div className="bg-gradient-to-br from-[hsl(var(--prize-gradient-start))] to-[hsl(var(--prize-gradient-end))] py-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <Gift className="w-7 h-7 text-primary" />
              </div>
            </div>
            {/* Bottom white section */}
            <div className="bg-background py-6 px-4">
              <p className="text-muted-foreground text-sm mb-1">Your Prize</p>
              <p className="text-3xl font-bold text-foreground mb-1">{prize}</p>
              <p className="text-muted-foreground text-xs">
                Enjoy this exclusive reward from our campaign.
              </p>
            </div>
          </div>

          {/* Redeem Button */}
          <button
            onClick={onRedeem}
            className="w-full bg-primary text-primary-foreground font-semibold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity shadow-lg"
          >
            <Gift className="w-5 h-5" />
            Redeem My PriZe
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardModal;
