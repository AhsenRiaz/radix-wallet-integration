import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useAccount } from "@/context/account";
import { useEffect, useState } from "react";
import { useSendTransaction } from "@/hooks/use-send-transaction";
import { componentAddress } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { accounts, selectedAccount } = useAccount();
  const sendTransaction = useSendTransaction();

  const [loading, setLoading] = useState(false);

  const handleClaimToken = async () => {
    try {
      if (!accounts?.length) {
        alert("Please select an account first.");
        return;
      }

      const accountAddress = accounts[0]?.address;

      const manifest = `
     CALL_METHOD
    Address("${accountAddress}")
    "withdraw"
    Address("resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc")
    Decimal("1")
;
TAKE_FROM_WORKTOP
    Address("resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc")
    Decimal("1")
    Bucket("bucket_of_xrd")
;
CALL_METHOD
    Address("${componentAddress}")
    "buy_gumball"
    Bucket("bucket_of_xrd")
;
CALL_METHOD
    Address("${accountAddress}")
    "deposit_batch"
    Expression("ENTIRE_WORKTOP")
;
    `;

      setLoading(true);

      const result = await sendTransaction(manifest);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log(accounts);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Get started by Connecting the wallet .</li>
          <li>Buy Gumball NFT for 1 xrd (Stokenet).</li>
          {accounts?.length > 0 ? `Account:${accounts[0]?.address}` : null}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div id="connect-btn">
            <radix-connect-button className="rounded-md" />
          </div>
          <div className="flex px-7 gap-4 items-center flex-col sm:flex-row">
            <button
              onClick={handleClaimToken}
              className="rounded-full  cursor-pointer border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-14"
            >
              {loading ? "Loading" : "Buy"}
            </button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Built by Ahsan (Full Stack Developer)
        </a>
      </footer>
    </div>
  );
}
