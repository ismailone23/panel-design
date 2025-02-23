'use client'

import { redirect } from "next/navigation";
import React from "react";

export default function Home() {
  const isLoggedin = true;

  if (isLoggedin) {
    return redirect('/dashboard/overview')
  }

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}
