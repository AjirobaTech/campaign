import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import RewardModal from "./RewardModal";
import RedeemModal from "./RedeemModal";

const data = [
  { option: "₦1,000\nCASH", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "₦500\nAIRTIME", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
  { option: "BETTER LUCK\nNEXT TIME", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "₦1,500\nCASH", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
  { option: "WE LOVE\nYOU", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "RAMADAN\nKAREEM", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
  { option: "THANK\nYOU", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "₦750\nAIRTIME", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
  { option: "₦1,000\nDATA", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "BETTER LUCK\nNEXT TIME", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
  { option: "YOU ARE\nALMOST THERE", style: { backgroundColor: "#C62828", textColor: "#fff" } },
  { option: "₦1,000\nAIRTIME", style: { backgroundColor: "#FFF5E6", textColor: "#C62828" } },
];

interface SpinWheelPageProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName: string;
  userEmail: string;
  userPhone: string;
}

const SpinWheelPage = ({ open, onOpenChange, userName, userEmail, userPhone }: SpinWheelPageProps) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState("");
  const [rewardOpen, setRewardOpen] = useState(false);
  const [redeemOpen, setRedeemOpen] = useState(false);

  const handleSpinClick = () => {
    if (hasSpun) return;
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = async () => {
    setMustSpin(false);
    setHasSpun(true);
    const wonItem = data[prizeNumber].option.replace("\n", " ");
    setResult(wonItem);

    // Determine if user won a prize
    const nonWinningItems = ["BETTER LUCK NEXT TIME", "WE LOVE YOU", "RAMADAN KAREEM", "THANK YOU", "YOU ARE ALMOST THERE"];
    const isWin = !nonWinningItems.includes(wonItem);

    // Prepare campaign data
    const campaignData = {
      full_name: userName,
      email: userEmail,
      phone: userPhone,
      item: wonItem,
      won: isWin,
    };

    console.log("Sending project data immediately:", campaignData);

    try {
      const response = await fetch("https://staging.ajiroba.ng/v1/admin/campaigns/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        console.error("Failed to send campaign data:", response.statusText);
      } else {
        console.log("Campaign data sent successfully");
      }
    } catch (error) {
      console.error("Error sending campaign data:", error);
    }

    // Auto-show reward modal after a brief pause
    setTimeout(() => {
      onOpenChange(false);
      setRewardOpen(true);
    }, 800);
  };

  const handleRedeem = () => {
    setRewardOpen(false);
    
    // Determine if user won a prize to show redeem modal or join community link
    const nonWinningItems = ["BETTER LUCK NEXT TIME", "WE LOVE YOU", "RAMADAN KAREEM", "THANK YOU", "YOU ARE ALMOST THERE"];
    const isWin = !nonWinningItems.includes(result);

    if (isWin) {
      setRedeemOpen(true);
    } else {
      // Direct link to WhatsApp group for non-winners
      window.open("https://chat.whatsapp.com/LlEnIEgCjHt7eeOp0D3gq1?mode=gi_t", "_blank");
    }
  };

  const handleJoinWhatsApp = () => {
    setRedeemOpen(false);
    // Open WhatsApp group link
    window.open("https://chat.whatsapp.com/LlEnIEgCjHt7eeOp0D3gq1?mode=gi_t", "_blank");
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="sm:max-w-xl p-6 sm:p-8 gap-0 rounded-2xl border-none shadow-xl overflow-hidden"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
            Spin the Wheel & Win!
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Tap the spin button below and see what prize luck has for you today. Each participant gets one Ajiroba spin.
          </p>

          {/* Wheel */}
          <div className="flex justify-center mb-6 overflow-hidden">
            <div className="relative w-[300px] h-full sm:w-[400px] sm:h-full flex items-center justify-center">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={handleStopSpinning}
                backgroundColors={["#C62828", "#FFF5E6"]}
                textColors={["#fff", "#C62828"]}
                outerBorderColor="#D4A843"
                outerBorderWidth={12}
                innerBorderColor="#D4A843"
                innerBorderWidth={8}
                innerRadius={12}
                radiusLineColor="#D4A84380"
                radiusLineWidth={1}
                fontSize={11}
                textDistance={65}
                spinDuration={0.6}
                pointerProps={{
                  style: { filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" },
                }}
              />
            </div>
          </div>

          {/* Spin Button */}
          {!hasSpun && (
            <button
              onClick={handleSpinClick}
              disabled={mustSpin}
              className="mx-auto bg-primary text-primary-foreground font-semibold text-base px-10 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="text-lg">◎</span>
              Spin Now
            </button>
          )}
        </DialogContent>
      </Dialog>

      <RewardModal
        open={rewardOpen}
        onOpenChange={setRewardOpen}
        prize={result}
        onRedeem={handleRedeem}
      />

      <RedeemModal
        open={redeemOpen}
        onOpenChange={setRedeemOpen}
        onJoinWhatsApp={handleJoinWhatsApp}
      />
    </>
  );
};

export default SpinWheelPage;
