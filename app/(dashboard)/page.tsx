"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Header from "../components/Header";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="min-h-full">
      <Header session={session} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
