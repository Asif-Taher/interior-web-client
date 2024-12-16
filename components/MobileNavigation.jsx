import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import Nav from "./Nav";
import Logo from "@/components/Logo";

export default function MobileNavigation() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false); // Close the Sheet when a link is clicked
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col">
            <Logo />
            <Nav
              onLinkClick={closeSheet} // Pass the close function to Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-semibold"
              underlineStyles="border-b-2 border-blue-500" // Example underline styles
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
