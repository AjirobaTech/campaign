import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Gift, Users } from "lucide-react";

interface RewardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prize: string;
  onRedeem: () => void;
}

const RewardModal = ({ open, onOpenChange, prize, onRedeem }: RewardModalProps) => {
  const winningOptions = [
    "₦1,000 AIRTIME",
    "₦1,000 CASH",
    "₦1,500 CASH",
    "₦750 AIRTIME",
    "₦1,000 DATA",
    "₦500 AIRTIME",
  ];

  const hasWon = winningOptions.includes(prize);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-md p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {hasWon ? "🎊 Congratulations!" : "Better Luck next time!"}
          </h2>
          <p className="text-muted-foreground text-sm mb-6 px-4">
            {hasWon
              ? "You've won a reward! We have sent you a mail of your reward"
              : "We are sorry you didn't win this time. Don't feel bad about this, we still have many other gifts coming up"}
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
              <p className="text-3xl font-bold text-foreground mb-1 capitalize">
                {prize.toLowerCase()}
              </p>
              <p className="text-muted-foreground text-xs">
                Enjoy this exclusive reward from our campaign.
              </p>
            </div>
          </div>

          {/* Redeem Button */}
          <button
            onClick={onRedeem}
            className={`w-full font-semibold text-base px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 transition-all shadow-lg bg-primary text-primary-foreground hover:opacity-90 shadow-primary/20`}
          >
            {hasWon ? (
              <>
                <Gift className="w-5 h-5" />
                Redeem My Prize
              </>
            ) : (
              <>
                <Users className="w-5 h-5" />
                Join our community
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RewardModal;
