"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  headerText?: string;
  children: React.ReactNode;
  headerLabel?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  socialText?: string
};

export const CardWrapper = ({
  headerText,
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  socialText
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] border-none shadow-none">
      <CardHeader>
        {headerText && <Header headerText={headerText} label={headerLabel} />}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter className="flex justify-center">
         { socialText && <Social socialText={socialText} />}
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
